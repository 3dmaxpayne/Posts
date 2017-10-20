import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BookNewComponent } from './books/book-new/book-new.component';
import { CartComponent } from './cart/cart.component';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent,
        BookItemComponent,
        BookNewComponent,
        CartComponent,
    ],
    imports: [
        AuthModule,
        HttpModule,
        BrowserModule,
        CoreModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
