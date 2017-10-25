import { Injectable } from '@angular/core';
import { Book } from './book-item/book.model';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BookService {
    booksChanged = new Subject<Book[]>();
    private books: Book[] = [];
    private bookStorage = 'http://localhost:8000/img/covers/';
    private apiHost: string = 'http://localhost:8000/api/';

    constructor(private http: Http) { }

    getBookStars(book: Book) {
        let stars = '';
        for(let i = 1; i <= 5; i++) {    //5 - max stars count
            if (i <= book.rank) {
                stars += ' <i class="fa fa-star" aria-hidden="true"></i>'
            } else {
                stars += ' <i class="fa fa-star-o" aria-hidden="true"></i>'
            }
        }
        return stars;
    }

    getBooks(path: string) {
        return this.http.get(this.apiHost + path)
            .map(
                (response) => {
                    this.books = response.json();
                    this.booksChanged.next(this.books.slice());
                    console.log(this.books);
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    getBooksForHome() {
        return this.http.get(this.apiHost + 'home')
            .map(
                (response) => {
                    this.books = response.json();
                    this.booksChanged.next(this.books.slice());
                    console.log(this.books);
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            );
    }

    getCurrentBooks() {
        console.log(this.books);
        return this.books.slice();
    }


}
