import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book-item/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit, OnDestroy {
    books: Book[];
    page:number = 1;
    private subscription;

    constructor(public bookService: BookService)
    {
        this.subscription = this.bookService.getAllBooks().subscribe(
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
