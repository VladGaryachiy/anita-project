import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeMebelsPageComponent } from './type-mebels-page/type-mebels-page.component';


const routes: Routes = [
    {
        path: '',
        component: TypeMebelsPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeMebelsPageRoutingModule { }
