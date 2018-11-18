import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AboutProductComponent } from './about-product.component';
import { MatCardModule } from '../../../../node_modules/@angular/material/card';

@NgModule({
    declarations: [
        AboutProductComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatListModule,
        MatCheckboxModule,
        MatCardModule,
    ],
    providers: [],
    exports: [AboutProductComponent]
})
export class AboutProductModule {
}
