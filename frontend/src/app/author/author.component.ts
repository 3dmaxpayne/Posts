import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit, OnDestroy {
    public author;
    private subscription;
    public httpSubscription;
    page:number = 1;

    constructor(public bookService: BookService,
                private route: ActivatedRoute) {
        this.httpSubscription = this.route.params.subscribe(
            (params: Params) => {
                const id = params['id'];
                this.subscription = this.bookService.getAuthorWithBooks(id).subscribe(
                    (response) => {
                        this.author = response;
                    }
                );

            }
        );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.httpSubscription.unsubscribe();
    }

}
