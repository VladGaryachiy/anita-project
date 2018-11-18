import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { DatabaseService } from '../../../services/database/database.service';
import { ProductDataInterface } from '../../../models/productsData.interface';
import { BasketService } from '../../../services/basket/basket.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BasketModalComponent } from '../../../components/basket-modal/basket-modal.component';
import { AboutProductComponent } from '../../../components/about-product/about-product.component';
import { ProductsFiltersService } from '../../../services/products-filters/products-filters.service';
import { logger } from '../../../../../node_modules/codelyzer/util/logger';

@Component({
    selector: 'app-type-mebels-page',
    templateUrl: './type-mebels-page.component.html',
    styleUrls: ['./type-mebels-page.component.scss']
})
export class TypeMebelsPageComponent implements OnInit {
    public chooiseProduct: ProductDataInterface[] = [];
    public idProduct: string;
    public dataForFilter: Subject<ProductDataInterface[]> = new Subject();
    public querySubscription: Subscription;
    constructor(private activateRoute: ActivatedRoute,
                private db: DatabaseService,
                private basketService: BasketService,
                public modal: MatDialog,
                public snackBar: MatSnackBar,
                private productFilterSevice: ProductsFiltersService,
    ) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(params => {
            this.idProduct = params['id'];
            this.db.getProductsData('/' + this.idProduct).subscribe(data => {
                this.chooiseProduct = data;
                this.dataForFilter.next(data);
            });
        });
    }

    public addProduct(product: ProductDataInterface) {
        this.basketService.addProduct(product);
        this.snackBar.open('Товар додано до корзини', null, {
            duration: 700,
            panelClass: 'toast-style'
        });

    }

    public aboutProduct(product: ProductDataInterface): void {
        const dialogRef = this.modal.open(AboutProductComponent, {
            width: '650px',
            height: '620px',
            data: product
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    public filter(products: ProductDataInterface[]) {
        this.chooiseProduct = products;
        this.dataForFilter.next(this.chooiseProduct);
    }

  /*  public priceFilter(products: ProductDataInterface[]) {
        this.chooiseProduct = products;
        this.dataForFilter.next(this.chooiseProduct);
    }

    public brandFilter(products: ProductDataInterface[]) {
        this.chooiseProduct = products;
        this.dataForFilter.next(this.chooiseProduct);
    }*/

}
