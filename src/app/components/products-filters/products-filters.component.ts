import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsFiltersService } from '../../services/products-filters/products-filters.service';
import { ProductDataInterface } from '../../models/productsData.interface';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database/database.service';
import { AboutProductComponent } from '../about-product/about-product.component';
import { ProductInOrderComponent } from '../product-in-order/product-in-order.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-products-filters',
    templateUrl: './products-filters.component.html',
    styleUrls: ['./products-filters.component.scss']
})
export class ProductsFiltersComponent implements OnInit {
    @Input() productsList: Subject<ProductDataInterface[]>;
    @Output() resultFilter = new EventEmitter();
    public positionOptions: string[] = ['asas', 'asd'];
    public position = new FormControl(this.positionOptions[0]);
    public stylePositionOptions: string[] = ['asas', 'asd'];
    public stylePosition = new FormControl(this.stylePositionOptions[0]);
    public countryPositionOptions: string[] = ['asas', 'asd'];
    public countryPosition = new FormControl(this.countryPositionOptions[0]);
    public products: ProductDataInterface[];
    public selectProducts: ProductDataInterface[] = [];
    public checkBrand = '';
    public checkStyle = '';
    public checkCountry = '';
    public showFiller = false;

    public rangeOptions = {
        max: 100,
        min: 0,
        step: 1,
        thumbLabel: true,
    };
    public checkPrice = 0;

    constructor(private productFilterSevice: ProductsFiltersService,
                private activateRoute: ActivatedRoute,
                private db: DatabaseService,
                public modal: MatDialog) {
    }

    ngOnInit() {
        this.productsList.subscribe(data => {
            this.products = data;
        });
        this.activateRoute.params.subscribe(params => {
            const id = params['id'];
            this.db.getProductsData('/' + id).subscribe(data => {
                this.brandsForSelect(data);
                this.stylesForSelect(data);
                this.countryesForSelect(data);
                /* this.limitPrice(data);*/
                this.limitPrice(data);
                this.selectProducts = data;
            });
        });
    }

    public limitPrice(data: ProductDataInterface[]) {
        if (this.productsList) {
            const prices: number[] = data.map(product => product.priceId);
            this.rangeOptions.max = Math.max(...prices);
        }
    }

    public brandsForSelect(data: ProductDataInterface[]) {
        const selectBrands = [];
        data.forEach(product => {
            if (selectBrands.indexOf(product.brand) < 0) {
                selectBrands.push(product.brand);
            }
        });
        this.positionOptions = selectBrands;
        this.position = new FormControl(this.positionOptions[0]);
    }

    public stylesForSelect(data: ProductDataInterface[]) {
        const selectStyles = [];
        data.forEach(product => {
            if (selectStyles.indexOf(product.style) < 0) {
                selectStyles.push(product.style);
            }
        });
        this.stylePositionOptions = selectStyles;
        this.stylePosition = new FormControl(this.stylePositionOptions[0]);
    }

    public countryesForSelect(data: ProductDataInterface[]) {
        const selectCountryes = [];
        data.forEach(product => {
            if (selectCountryes.indexOf(product.country) < 0) {
                selectCountryes.push(product.country);
            }
        });
        this.countryPositionOptions = selectCountryes;
        this.countryPosition = new FormControl(this.countryPositionOptions[0]);
    }


    public filter(filteredProducts: ProductDataInterface[]) {
        this.resultFilter.emit(filteredProducts);
    }

    public onPriceFilter() {
        const selectProducts = this.productFilterSevice.priceFilter(this.checkPrice,
            this.selectProducts,
            this.checkBrand,
            this.checkStyle,
            this.checkCountry);
        this.filter(selectProducts);
    }

    public onBrandFilter(checkBrand: string) {
        this.checkBrand = null;
        this.checkBrand = checkBrand;
        const selectProducts = this.productFilterSevice.brandFilter(checkBrand,
            this.selectProducts,
            this.checkPrice,
            this.checkStyle,
            this.checkCountry);
        this.filter(selectProducts);
    }

    public onStyleFilter(checkStyle: string) {
        this.checkStyle = null;
        this.checkStyle = checkStyle;
        const selectProducts = this.productFilterSevice.styleFilter(checkStyle,
            this.selectProducts,
            this.checkPrice,
            this.checkBrand,
            this.checkCountry);
        this.filter(selectProducts);
    }

    public onCountryFilter(checkCountry: string) {
        this.checkCountry = null;
        this.checkCountry = checkCountry;
        const selectProducts = this.productFilterSevice.countryFilter(checkCountry,
            this.selectProducts,
            this.checkPrice,
            this.checkBrand,
            this.checkStyle);
        this.filter(selectProducts);
    }

    public orderProduct() {
        const dialogRef = this.modal.open(ProductInOrderComponent, {
            width: '650px',
            height: '620px',
        });
    }
}
