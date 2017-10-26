import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './book.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
    book: Book;
    public subscription;
    public httpSubscription;

    constructor(public bookService: BookService,
                private route: ActivatedRoute,
                public authService: AuthService) {
        this.httpSubscription = this.route.params
            .subscribe(
                (params) => {
                    const id = params['id'];
                    this.subscription = this.bookService.getBookById(id).subscribe(
                        (response) => {
                            this.book = response;
                        },
                    (error) => {
                            console.log(error);
                        }
                    );
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    ngOnInit() {
    }

}
