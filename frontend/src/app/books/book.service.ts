import { Injectable } from '@angular/core';
import { Book } from './book-item/book.model';
import { Http } from '@angular/http';

@Injectable()
export class BookService {
    private books: Book[];
    public bookStorage = 'http://localhost:8000/img/covers/';

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

    getBooksForHome() {
        return this.http.get('http://localhost:8000/api/home')
            .map(
                (response) => {
                    this.books = response.json();
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    getRecommendedBooks() {
        return this.http.get('http://localhost:8000/api/books/recommended')
            .map(
                (response) => {
                    this.books = response.json();
                    return response.json();
                },
                (error) => {
                    console.log(error)
                }
            )
    }

}
