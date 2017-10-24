import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BookItemComponent } from './book-item/book-item.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { TopComponent } from './top/top.component';
import { CommentedComponent } from './commented/commented.component';
import { NewestComponent } from './newest/newest.component';
import { SalesComponent } from './sales/sales.component';
import { AllComponent } from './all/all.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        BookRoutingModule

    ],
    declarations: [
        BookItemComponent,
        RecommendedComponent,
        TopComponent,
        CommentedComponent,
        NewestComponent,
        SalesComponent,
        AllComponent,
    ],
    exports: []
})

export class BooksModule { }
