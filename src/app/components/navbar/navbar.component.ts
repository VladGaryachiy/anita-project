import { Component, OnInit } from '@angular/core';
import { NavbarConfigInterface } from '../../models/navbar-links.interface';
import { MatDialog } from '@angular/material';
import { BasketModalComponent } from '../basket-modal/basket-modal.component';
import { BasketService } from '../../services/basket/basket.service';
import { Observable } from 'rxjs';
import { ProductDataInterface } from '../../models/productsData.interface';
import { FormControl } from '@angular/forms';
import { DatabaseService } from '../../services/database/database.service';
import { Router } from '@angular/router';
import { AboutProductComponent } from '../about-product/about-product.component';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public productsInBasket: ProductDataInterface[];
    public amountProducts = 0;
    public searchProduct: ProductDataInterface[] = [];
    public searchLink = '';
    public navbarMenuConfig: NavbarConfigInterface[] = [
        {
            name: 'Головна',
            url: '/home'
        },
        {
            name: 'Типи меблів',
            dropDownMenu: [
                {
                    id: 'KithenModules',
                    name: 'Кухонні модулі',
                    url: 'types'
                },
                {
                    id: 'KithenCorner',
                    name: 'Кухонні куточки',
                    url: 'types'
                },
                {
                    id: 'Stools',
                    name: 'Стільці',
                    url: 'types'
                },
                {
                    id: 'Tables',
                    name: 'Cтоли',
                    url: 'types'
                },
                {
                    id: 'Complects',
                    name: 'Комплекти',
                    url: 'types'
                }
            ]
        }
    ];
    public position = new FormControl(this.navbarMenuConfig[1].dropDownMenu[0].name);

    constructor(public modal: MatDialog,
                private basketService: BasketService,
                private db: DatabaseService,
                private router: Router,
                private sso: ScrollStrategyOptions) {
    }

    ngOnInit() {
        this.basketService.getBasketData.subscribe(data => {
            console.log(data);
            this.amountProducts = data.length;
        });
    }

    public openBasket(): void {
        const dialogRef = this.modal.open(BasketModalComponent, {
            width: '700px',
            height: '620px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    public searchProducts(event: any) {
        if (event.target.value) {
            console.log(event.target.value);
            this.db.searchProducts(event.target.value).subscribe((data: ProductDataInterface[]) => {
                this.searchProduct = [...data];
            });
        } else {
            this.searchProduct = [];
        }
    }

    public switchTypes(type: string) {
        switch (type) {
            case 'Модульна кухня':
                this.searchLink = 'KithenModules';
                break;
            case 'Кухонний куточок':
                this.searchLink = 'KithenCorner';
                break;
            case 'Комплекти':
                this.searchLink = 'Complects';
                break;
            case 'Cтільці':
                this.searchLink = 'Stools';
                break;
            case 'Cтоли':
                this.searchLink = 'Tables';
                break;
            default:
                break;
        }
    }

    public selectProduct(productName: string) {
        const product = this.searchProduct.find(item => item.name === productName);
        this.aboutProduct(product);
    }

    public aboutProduct(product: ProductDataInterface): void {
        const dialogRef = this.modal.open(AboutProductComponent, {
            width: '650px',
            height: '620px',
            data: product,
            autoFocus: true
        });
    }

    public removeList(type: string, productName: string) {
        this.selectProduct(productName);
        this.searchProduct = [];
    }

}
