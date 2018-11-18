import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSelectionList, MatSnackBar } from '@angular/material';
import { BasketService } from '../../services/basket/basket.service';
import { ProductDataInterface } from '../../models/productsData.interface';


@Component({
    selector: 'app-about-product',
    templateUrl: './about-product.component.html',
    styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit {

    public material: string[] = [];
    public size: string[] = [];
    public correctName = '';

    constructor(public dialogRef: MatDialogRef<AboutProductComponent>,
                @Inject(MAT_DIALOG_DATA) public product: ProductDataInterface,
                private basketService: BasketService,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
        console.log(this.product);
        if (typeof this.product.material === 'object') {
            Object.keys(this.product.material).forEach(item => {
                this.material.push(this.product.material[item]);
            });
        } else {
            this.material[0] = this.product.material;
        }
        if (this.product.size) {
            Object.keys(this.product.material).forEach(item => {
                this.size.push(this.product.material[item]);
            });
        }
        this.convertName();
    }

    public exit(): void {
        this.dialogRef.close();
    }

    public convertName(): void {
        const partName: string[] = this.product.name.split(':');
        this.correctName = partName[1];
    }

    public addProduct(product: ProductDataInterface) {
        this.basketService.addProduct(product);
        this.snackBar.open('Товар додано до корзини', null, {
            duration: 700,
            panelClass: 'toast-style'
        });
    }

}
