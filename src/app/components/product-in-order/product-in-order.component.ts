import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSelectionList, MatSnackBar } from '@angular/material';
import { BasketService } from '../../services/basket/basket.service';
import { ProductDataInterface } from '../../models/productsData.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-about-product',
    templateUrl: './product-in-order.component.html',
    styleUrls: ['./product-in-order.component.scss']
})
export class ProductInOrderComponent implements OnInit {
    public productInOrderForm: FormGroup;
    public fournitureTypes: string[] = [
        'Кухонні модулі',
        'Кухонні комплекти',
        'Кухонні куточки',
        'Столи',
        'Стільці'
    ];
    public fTypesPosition = new FormControl(this.fournitureTypes[0]);
    public fournitureStyles: string[] = [
        'Класичний',
        'Модерн',
        'Готика',
        'Ампір',
        'Бароко'
    ];
    public fStylesPosition = new FormControl(this.fournitureStyles[0]);
    public fournitureMaterials: string[] = [
        'ДСП',
        'ДСП 16 мм.',
        'ДВП',
        'МДФ'
    ];
    public fMaterialsPosition = new FormControl(this.fournitureMaterials[0]);
    public fournitureCountry: string[] = [
        'Україна',
        'Росія',
        'Білорусь',
        'Турція'
    ];
    public fCountryPosition = new FormControl(this.fournitureCountry[0]);
    public resultProductInOrder: any;

    constructor(public dialogRef: MatDialogRef<ProductInOrderComponent>,
                private basketService: BasketService,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.productInOrderForm = new FormGroup({
            'userName': new FormControl('', Validators.required),
            'userSurname': new FormControl('', Validators.required),
            'userCity': new FormControl('', Validators.required),
            'userEmail': new FormControl('', [
                Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
            ]),
            'userPhone': new FormControl('', [
                Validators.required, Validators.pattern('[0-9]{10}')
            ]),
            'furniturePrice': new FormControl('')
        });
    }

    public exit(): void {
        this.dialogRef.close();
    }

    public toDrawUpOrder(orderForm: FormGroup, type: any, style: any, material: any, country: any) {
        this.resultProductInOrder = null;
        this.resultProductInOrder = {
            ...orderForm.value,
            fournitureType: type.selected.value,
            fournitureStyle: style.selected.value,
            fournitureMaterial: material.selected.value,
            fournitureCountry: country.selected.value
        };
    }

    public sendOrder() {
        const message = `Дякуємо, ${this.resultProductInOrder.userSurname} ${this.resultProductInOrder.userName}, ` +
        `наший менеджер зв'яжеться з вами протягом доби для повного оформлення вашого замовлення.`;
        this.snackBar.open(message, null, {
            duration: 8000,
            panelClass: 'toast-style'
        });
    }
}
