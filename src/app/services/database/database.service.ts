import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/internal/Observable';
import { ProductDataInterface } from '../../models/productsData.interface';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    constructor(private db: AngularFireDatabase) {
    }

    public getProductsData(url?: string): Observable<ProductDataInterface[]> {
        return this.db.list<ProductDataInterface>(url).valueChanges();
    }

    public searchProducts(searchText: string): Observable<ProductDataInterface[]> {
        const searchProperty = new RegExp(searchText, 'i');
        return this.db.list<ProductDataInterface>('/').valueChanges()
            .pipe(map(data => {
                const selectedType = [];
                data.forEach((productItem: any) => {
                    productItem.forEach((item: any) => {
                        if (searchProperty.test(item.type)) {
                            selectedType.push(item);
                        }
                    });
                });
                return selectedType;
            }));
    }
}
