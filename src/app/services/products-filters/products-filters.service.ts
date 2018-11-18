import { Injectable } from '@angular/core';
import { ProductDataInterface } from '../../models/productsData.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductsFiltersService {


    constructor() {
    }

    public priceFilter(price: number,
                       allProducts: ProductDataInterface[],
                       checkBrand?: string,
                       checkStyle?: string,
                       checkCountry?: string): ProductDataInterface[] {
        let selectProducts: ProductDataInterface[] = allProducts.filter(product => {
            if (product.priceId >= price) {
                return product;
            }
        });
        if (checkBrand) {
            selectProducts = this.brandFilter(checkBrand, selectProducts);
        }
        if (checkStyle) {
            selectProducts = this.styleFilter(checkStyle, selectProducts);
        }
        if (checkCountry) {
            selectProducts = this.countryFilter(checkCountry, selectProducts);
        }
        return selectProducts;
    }

    public brandFilter(searchProp: string,
                       allProducts: ProductDataInterface[],
                       checkPrice?: number,
                       checkStyle?: string,
                       checkCountry?: string): ProductDataInterface[] {
        let selectProducts: ProductDataInterface[] = allProducts.filter(product => {
            if (product.brand === searchProp) {
                return product;
            }
        });
        if (checkPrice && +checkPrice > 0) {
            selectProducts = this.priceFilter(checkPrice, selectProducts);
        }
        if (checkStyle) {
            selectProducts = this.styleFilter(checkStyle, selectProducts);
        }
        if (checkCountry) {
            selectProducts = this.countryFilter(checkCountry, selectProducts);
        }
        return selectProducts;
    }

    public styleFilter(searchProp: string,
                        allProducts: ProductDataInterface[],
                        checkPrice?: number,
                        checkBrand?: string,
                        checkCountry?: string): ProductDataInterface[] {
        let selectProducts: ProductDataInterface[] = allProducts.filter(product => {
            if (product.style === searchProp) {
                return product;
            }
        });
        if (checkBrand) {
            selectProducts = this.brandFilter(checkBrand, selectProducts);
        }
        if (checkPrice && +checkPrice > 0) {
            selectProducts = this.priceFilter(checkPrice, selectProducts);
        }
        if (checkCountry) {
            selectProducts = this.countryFilter(checkCountry, selectProducts);
        }
        return selectProducts;
    }

    public countryFilter(searchProp: string,
                       allProducts: ProductDataInterface[],
                       checkPrice?: number,
                       checkBrand?: string,
                       checkStyle?: string): ProductDataInterface[] {
        let selectProducts: ProductDataInterface[] = allProducts.filter(product => {
            if (product.country === searchProp) {
                return product;
            }
        });
        if (checkBrand) {
            selectProducts = this.brandFilter(checkBrand, selectProducts);
        }
        if (checkPrice && +checkPrice > 0) {
            selectProducts = this.priceFilter(checkPrice, selectProducts);
        }
        if (checkStyle) {
            selectProducts = this.brandFilter(checkStyle, selectProducts);
        }
        return selectProducts;
    }
}
