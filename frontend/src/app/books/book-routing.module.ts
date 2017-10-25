import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllComponent } from './all/all.component';
import { BooksComponent } from './books.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
    {path: 'books/all', component: AllComponent },
    {path: 'books/sales', component: SalesComponent},
    {path: 'books/:path', component: BooksComponent },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class BookRoutingModule {

}