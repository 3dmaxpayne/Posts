import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { BooksModule } from './books/books.module';
import { BookRoutingModule } from './books/book-routing.module';
import { AuthorComponent } from './author/author.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';


@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        AuthorComponent,
        SearchComponent
    ],
    imports: [
        AuthModule,
        HttpModule,
        BrowserModule,
        CoreModule,
        HomeModule,
        BooksModule,
        BookRoutingModule,
        NgxPaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
