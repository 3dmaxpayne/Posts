import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BookItemComponent } from './book-item/book-item.component';
import { SalesComponent } from './sales/sales.component';
import { AllComponent } from './all/all.component';
import { BookRoutingModule } from './book-routing.module';
import { BooksComponent } from './books.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        BookRoutingModule

    ],
    declarations: [
        BookItemComponent,
        SalesComponent,
        AllComponent,
        BooksComponent,
    ],
    exports: []
})

export class BooksModule { }
