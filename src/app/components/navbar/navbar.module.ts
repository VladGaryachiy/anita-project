import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BasketModalModule } from '../basket-modal/basket-modal.module';
import { BasketModalComponent } from '../basket-modal/basket-modal.component';
import { BasketService } from '../../services/basket/basket.service';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '../../../../node_modules/@angular/material/form-field';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutProductComponent } from '../about-product/about-product.component';
import { AboutProductModule } from '../about-product/about-product.module';

@NgModule({
    declarations: [
        NavbarComponent,
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
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        AboutProductModule
    ],
    exports: [NavbarComponent],
    entryComponents: [BasketModalComponent, AboutProductComponent],
    providers: [],
})
export class NavbarModule {
}
