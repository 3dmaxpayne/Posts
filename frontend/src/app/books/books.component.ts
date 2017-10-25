import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from './book-item/book.model';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy, OnChanges {

    books: Book[];

    private routes = [];
    private httpSubscription: any;
    private booksChangedSubscription: any;
    private booksSubscription: any;

    private path;

    header = '';

    ngOnInit() {
        this.routes['all'] = 'books/all';
        this.routes['ranked'] = 'books/ranked';
        this.routes['bestsellers'] = 'books/bestsellers';
        this.routes['commented'] = 'books/commented';
        this.routes['newest'] = 'books/newest';
        this.routes['recommended'] = 'books/recommended';


        this.httpSubscription = this.route.params
            .subscribe(
                (params: Params) => {
                    if (this.routes[params['path']] !== undefined) {
                        this.header = params['path'];
                        this.path = this.routes[params['path']];
                        this.booksSubscription = this.bookService.getBooks(this.path).subscribe(
                            (response) => {
                                this.books = response;
                            }
                        );
                    } else {
                        console.log('error path!');
                    }
                }
            );
        this.booksChangedSubscription = this.bookService.booksChanged.subscribe(
            (books: Book[]) => {
                this.books = books;
            }
        );


    }

    constructor(public bookService: BookService,
                private route: ActivatedRoute,
                private router: Router) {
        this.books = this.bookService.getCurrentBooks();
    }

    ngOnChanges(changes) {
        console.log(changes)
    }

    ngOnDestroy() {
        this.booksChangedSubscription.unsubscribe();
        this.httpSubscription.unsubscribe();
    }
}
