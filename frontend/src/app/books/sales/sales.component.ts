import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../book-item/book.model';
import { BookService } from '../book.service';

@Component({
    selector: 'app-sales',
    templateUrl: '../all/all.component.html',
    styleUrls: ['../all/all.component.css']
})
export class SalesComponent implements OnInit, OnDestroy {
    books: Book[];
    page:number = 1;

    private subscription;


    constructor(public bookService: BookService)
    {
        this.subscription = this.bookService.getSalesBooks().subscribe(
            (response) => {
                this.books = response;
            });
    }


    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
