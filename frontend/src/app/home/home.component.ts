import { Component, OnDestroy, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Book } from '../books/book-item/book.model';
import { BookService } from '../books/book.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    books: Book[] = [];
    private subscription;

    constructor(public bookService: BookService) {
        this.subscription = this.bookService.getBooksForHome().subscribe(
            (response) => {
              this.books = response;
            }
        )
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
