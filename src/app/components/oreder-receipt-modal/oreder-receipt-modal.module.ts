import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '../../../../node_modules/@angular/material/button';
import { MatIconModule } from '../../../../node_modules/@angular/material/icon';
import { MatDialogModule } from '../../../../node_modules/@angular/material/dialog';
import { MatListModule } from '../../../../node_modules/@angular/material/list';
import { MatCheckboxModule } from '../../../../node_modules/@angular/material/checkbox';
import { MatTableModule } from '../../../../node_modules/@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { OrederReceiptModalComponent } from './oreder-receipt-modal.component';

@NgModule({
    declarations: [
        OrederReceiptModalComponent
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
        MatInputModule
    ],
    exports: [OrederReceiptModalComponent],
})
export class OrederReceiptModalModule {
}
