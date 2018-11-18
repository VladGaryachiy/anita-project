import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeMebelsPageRoutingModule } from './type-mebels-page-routing.module';
import { TypeMebelsPageComponent } from './type-mebels-page/type-mebels-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AboutProductComponent } from '../../components/about-product/about-product.component';
import { AboutProductModule } from '../../components/about-product/about-product.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductsFiltersComponent } from '../../components/products-filters/products-filters.component';
import { ProductsFilterModule } from '../../components/products-filters/products-filters.module';
import { MatSidenavModule } from '../../../../node_modules/@angular/material/sidenav';

@NgModule({
    imports: [
        CommonModule,
        TypeMebelsPageRoutingModule,
        MatCardModule,
        MatButtonModule,
        AboutProductModule,
        MatSnackBarModule,
        ProductsFilterModule,
        MatSidenavModule
    ],
    declarations: [TypeMebelsPageComponent],
    entryComponents: [AboutProductComponent],
    providers: []
})
export class TypeMebelsPageModule {
}
