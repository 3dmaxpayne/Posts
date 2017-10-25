import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllComponent } from './all/all.component';
import { BookItemComponent } from './book-item/book-item.component';
import { SalesComponent } from './sales/sales.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
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