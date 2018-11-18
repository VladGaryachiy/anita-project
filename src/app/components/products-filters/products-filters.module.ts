import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BasketModalModule } from '../basket-modal/basket-modal.module';
import { BasketModalComponent } from '../basket-modal/basket-modal.component';
import { BasketService } from '../../services/basket/basket.service';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductsFiltersComponent } from './products-filters.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '../../../../node_modules/@angular/material/form-field';
import { MatSelectModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductInOrderModule } from '../product-in-order/product-in-order.module';
import { AboutProductComponent } from '../about-product/about-product.component';
import { ProductInOrderComponent } from '../product-in-order/product-in-order.component';

@NgModule({
    declarations: [
        ProductsFiltersComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        RouterModule,
        MatIconModule,
        MatDialogModule,
        BasketModalModule,
        MatBadgeModule,
        MatExpansionModule,
        FormsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatSidenavModule,
        ProductInOrderModule
    ],
    exports: [ProductsFiltersComponent],
    entryComponents: [ProductInOrderComponent],
    providers: [],
})
export class ProductsFilterModule {
}
