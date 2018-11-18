import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BasketModalComponent } from './basket-modal.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { OrderModalModule } from '../order-modal/order-modal.module';
import { OrderModalComponent } from '../order-modal/order-modal.component';

@NgModule({
    declarations: [
        BasketModalComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatListModule,
        MatCheckboxModule,
        MatTableModule,
        OrderModalModule
    ],
    providers: [],
    entryComponents: [OrderModalComponent],
    exports: [BasketModalComponent],
})
export class BasketModalModule {
}
