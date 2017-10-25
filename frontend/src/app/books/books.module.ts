import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BookItemComponent } from './book-item/book-item.component';
import { SalesComponent } from './sales/sales.component';
import { AllComponent } from './all/all.component';
import { BookRoutingModule } from './book-routing.module';
import { BooksComponent } from './books.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        BookRoutingModule,
        NgxPaginationModule
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
