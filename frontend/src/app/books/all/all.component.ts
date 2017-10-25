import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit, OnDestroy {

    constructor(public bookService: BookService) {

    }

    ngOnInit() {
    }

    ngOnDestroy() {

    }

}
