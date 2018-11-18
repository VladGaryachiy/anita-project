import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductDataInterface } from '../../models/productsData.interface';
import { MatListOption } from '@angular/material';


@Injectable({
    providedIn: 'root'
})
export class BasketService {
    public basket: ProductDataInterface[] = [];
    private _basketData = new BehaviorSubject([]);
    public choiceProducts: ProductDataInterface[] = [];
    private _orderProducts = new BehaviorSubject([]);

    constructor() {
    }

    public get getBasketData(): Observable<ProductDataInterface[]> {
        if (this.basket.length) {
            this._basketData.next(this.basket);
        }
        return this._basketData.asObservable();
    }

    public get getOrderData(): Observable<ProductDataInterface[]> {
        if (this.choiceProducts.length) {
            this._orderProducts.next(this.choiceProducts);
        }
        return this._orderProducts.asObservable();
    }

    public addProduct(product: ProductDataInterface): void {
        this.countDetector(product);
        this._basketData.next(this.basket);
    }

    public countDetector(product: ProductDataInterface): void {
        const selectProduct = this.basket.find(item => item.name === product.name);
        if (selectProduct) {
            selectProduct.priceId += selectProduct.priceId;
            selectProduct.amount++;
        } else {
            product.amount = 1;
            this.basket = [...this.basket, product];
        }
    }

    public totalPrice(productList: MatListOption[]): number {
        let total = 0;
        productList.forEach(item => {
            total += Number(item._element.nativeElement.id);
        });
        return total;
    }

    public clearBasket(): void {
        this.basket.length = 0;
        this._basketData.next(this.basket);
        console.log(this.basket);
    }

    public addToOrder(product: ProductDataInterface): void {
        if (!this.choiceProducts.find(item => item.name === product.name)) {
            this.choiceProducts = [...this.choiceProducts, product];
            this._orderProducts.next(this.choiceProducts);
        }
    }

    public removeToOrder(product: ProductDataInterface): void {
        console.log(this.choiceProducts.indexOf(product));
        this.choiceProducts.splice(this.choiceProducts.indexOf(product), 1);
        this._orderProducts.next(this.choiceProducts);
    }

    public clearOrder() {
        this.choiceProducts.length = 0;
        this._orderProducts.next(this.choiceProducts);
    }
}
