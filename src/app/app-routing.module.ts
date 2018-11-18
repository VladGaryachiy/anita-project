import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full',
    },
    {
        path: 'home', loadChildren: './pages/home-page/home-page.module#HomePageModule',
    },
    {
        path: 'basket', loadChildren: './pages/basket-page/basket-page.module#BasketPageModule',
    },
    {
        path: 'types/:id', loadChildren: './pages/type-mebels-page/type-mebels-page.module#TypeMebelsPageModule',
    },
    {
        path: '**', redirectTo: '/home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
}
