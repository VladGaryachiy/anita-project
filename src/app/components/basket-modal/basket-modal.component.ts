import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSelectionList } from '@angular/material';
import { BasketService } from '../../services/basket/basket.service';
import { ProductDataInterface } from '../../models/productsData.interface';
import { AboutProductComponent } from '../about-product/about-product.component';
import { OrderModalComponent } from '../order-modal/order-modal.component';


@Component({
    selector: 'app-basket-modal',
    templateUrl: './basket-modal.component.html',
    styleUrls: ['./basket-modal.component.scss']
})
export class BasketModalComponent implements OnInit, OnDestroy {
    public productsInBasket: ProductDataInterface[] = [];
    public orderProducts: ProductDataInterface[] = [];
    public priceTotal = 0;
    public displayedColumns: string[] = ['name', 'type', 'amount', 'price', 'choice'];
    public amountProducts = 0;
    public clearOrderData = true;

    constructor(public dialogRef: MatDialogRef<BasketModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private basketService: BasketService,
                public modal: MatDialog) {
    }

    ngOnInit() {
        this.basketService.getBasketData.subscribe(products => {
            this.productsInBasket = products;
        });
        this.basketService.getOrderData.subscribe(products => {
            this.orderProducts = products;
        });
    }

    ngOnDestroy() {
        if (this.clearOrderData) {
            this.basketService.clearOrder();
        }
        this.clearOrderData = true;
    }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    public countPrice(productList: MatSelectionList, product: ProductDataInterface): void {
        if (!productList.selectedOptions.selected.length) {
            this.priceTotal -= +product.priceId;
            this.amountProducts -= +product.amount;
            this.basketService.removeToOrder(product);
            return;
        }
        this.priceTotal += this.basketService.totalPrice(productList.selectedOptions.selected);
        this.amountProducts += productList.selectedOptions.selected.length;
        if (productList.selectedOptions.selected[0].selected) {
            this.basketService.addToOrder(product);
        }
    }

    public clearBasket(): void {
        this.basketService.clearBasket();
        /* this.onNoClick();*/
    }

    public openOrderModal(): void {
        this.clearOrderData = false;
        this.dialogRef.close();
        const dialogRef = this.modal.open(OrderModalComponent, {
            width: '700px',
            height: '620px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
