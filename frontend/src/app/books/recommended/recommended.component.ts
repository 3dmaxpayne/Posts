import { Component, OnInit } from '@angular/core';
import { Book } from '../book-item/book.model';
import { Http } from '@angular/http';
import { BookService } from '../book.service';

@Component({
  selector: 'app-recommended',
  templateUrl: '../all/all.component.html',
  styleUrls: ['../all/all.component.css']
})
export class RecommendedComponent implements OnInit {
    books: Book[];

    constructor(private http: Http,
                public bookService: BookService) {
        this.bookService.getRecommendedBooks().subscribe(
            (response) => {
                this.books = response;
                console.log(response)
            }
        )
    }

  ngOnInit() {
  }

}
