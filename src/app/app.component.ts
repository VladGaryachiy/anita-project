import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './services/database/database.service';
import { ProductDataInterface } from './models/productsData.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public data: ProductDataInterface[];

    constructor(private datavaseService: DatabaseService) {
    }

    ngOnInit() {
    }
}

