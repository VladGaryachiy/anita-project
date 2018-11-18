import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModalComponent } from './order-modal.component';
import { MatButtonModule } from '../../../../node_modules/@angular/material/button';
import { MatIconModule } from '../../../../node_modules/@angular/material/icon';
import { MatDialogModule } from '../../../../node_modules/@angular/material/dialog';
import { MatListModule } from '../../../../node_modules/@angular/material/list';
import { MatCheckboxModule } from '../../../../node_modules/@angular/material/checkbox';
import { MatTableModule } from '../../../../node_modules/@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { OrederReceiptModalModule } from '../oreder-receipt-modal/oreder-receipt-modal.module';
import { OrederReceiptModalComponent } from '../oreder-receipt-modal/oreder-receipt-modal.component';
import { MatSnackBarModule } from '../../../../node_modules/@angular/material/snack-bar';

@NgModule({
    declarations: [
        OrderModalComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatListModule,
        MatCheckboxModule,
        MatTableModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        OrederReceiptModalModule,
        MatSnackBarModule
    ],
    entryComponents: [OrederReceiptModalComponent],
    exports: [OrderModalComponent],
})
export class OrderModalModule {
}
