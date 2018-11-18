import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { BasketService } from '../../services/basket/basket.service';

@Component({
    selector: 'app-oreder-receipt-modal',
    templateUrl: './oreder-receipt-modal.component.html',
    styleUrls: ['./oreder-receipt-modal.component.scss']
})
export class OrederReceiptModalComponent implements OnInit {

    public displayedColumns: string[] = ['name', 'type', 'amount', 'price'];

    constructor(public dialogRef: MatDialogRef<OrederReceiptModalComponent>,
                @Inject(MAT_DIALOG_DATA) public orderData: any,
                private basketService: BasketService,
                public modal: MatDialog) {
        console.log(this.orderData);
        console.log(this.orderData);
        console.log(this.orderData);
    }

    ngOnInit() {
    }

    public closeOrder(): void {
        this.dialogRef.close();
    }

    public saveOrder() {
        alert('good');
    }

}
