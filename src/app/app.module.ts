import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { DatabaseService } from './services/database/database.service';
import { NavbarModule } from './components/navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BasketService } from './services/basket/basket.service';
import { OrederReceiptModalComponent } from './components/oreder-receipt-modal/oreder-receipt-modal.component';
import { ProductsFiltersService } from './services/products-filters/products-filters.service';
import { GestureConfig } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        NavbarModule,
        AppRoutingModule,
    ],
    providers: [
        DatabaseService, BasketService, ProductsFiltersService, { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
