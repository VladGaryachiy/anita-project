import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductInOrderComponent } from './product-in-order.component';
import { MatCardModule } from '../../../../node_modules/@angular/material/card';
import { MatFormFieldModule } from '../../../../node_modules/@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
    declarations: [
        ProductInOrderComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatListModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule
    ],
    providers: [],
    exports: [ProductInOrderComponent]
})
export class ProductInOrderModule {
}
