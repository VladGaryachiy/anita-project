import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { BasketService } from '../../services/basket/basket.service';
import { ProductDataInterface } from '../../models/productsData.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrederReceiptModalComponent } from '../oreder-receipt-modal/oreder-receipt-modal.component';

@Component({
    selector: 'app-order-modal',
    templateUrl: './order-modal.component.html',
    styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit, OnDestroy {

    public orderProducts: ProductDataInterface[] = [];
    public orderForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<OrderModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private basketService: BasketService,
                public modal: MatDialog,
                public snackBar: MatSnackBar) {
        this.orderForm = new FormGroup({
            'userName': new FormControl('', Validators.required),
            'userSurname': new FormControl('', Validators.required),
            'userCity': new FormControl('', Validators.required),
            'userEmail': new FormControl('', [
                Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
            ]),
            'userPhone': new FormControl('', [
                Validators.required, Validators.pattern('[0-9]{10}')
            ]),
        });
    }

    ngOnInit() {
        this.basketService.getOrderData.subscribe(products => {
            this.orderProducts = products;
        });
    }

    ngOnDestroy() {
        this.basketService.clearOrder();
    }

    public closeOrder(): void {
        this.dialogRef.close();
    }

    public toDrawUpOrder() {
        const infoForOrder = {userData: this.orderForm.value, userOrder: [...this.orderProducts]};
        if (this.orderForm.valid) {
            this.dialogRef.close();
            const dialogRef = this.modal.open(OrederReceiptModalComponent, {
                width: '700px',
                height: '620px',
                data: infoForOrder
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
            });
        } else {
            this.snackBar.open('Невірно заповнена форма', null, {
                duration: 1500,
                panelClass: 'toast-style'
            });
        }
    }
}
