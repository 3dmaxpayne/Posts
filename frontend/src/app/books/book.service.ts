import { Injectable } from '@angular/core';
import { Book } from './book-item/book.model';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BookService {
    booksChanged = new Subject<Book[]>();
    private books: Book[] = [];
    private bookStorage = 'http://api-posts.jdev.com.ua/img/covers/';
    private authorImages = 'http://api-posts.jdev.com.ua/img/authors/';
    private apiHost: string = 'http://api-posts.jdev.com.ua/api/';

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

    getBookById(id:number) {
        return this.http.get(this.apiHost + 'book/' + id)
            .map(
                (response) => {
                    this.books = [];
                    this.books.push(response.json());
                    this.booksChanged.next(this.books.slice());
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    getBooks(path: string) {
        return this.http.get(this.apiHost + path)
            .map(
                (response) => {
                    this.books = response.json();
                    this.booksChanged.next(this.books.slice());
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    getAllBooks() {
        return this.http.get(this.apiHost + 'books/all')
            .map(
                (response) => {
                    this.books = response.json();
                    this.booksChanged.next(this.books.slice());
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            );
    }

    getBooksForHome() {
        return this.http.get(this.apiHost + 'home')
            .map(
                (response) => {
                    this.books = response.json();
                    this.booksChanged.next(this.books.slice());
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            );
    }

    getSalesBooks() {
        return this.http.get(this.apiHost + 'books/sales')
            .map(
                (response) => {
                    this.books = response.json();
                    this.booksChanged.next(this.books.slice());
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            );
    }

    getAuthorWithBooks(id:number) {
        return this.http.get(this.apiHost + 'author/' + id)
            .map(
                (response) => {
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    getCurrentBooks() {
        return this.books.slice();
    }


}
