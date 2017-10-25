import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public logo = 'Bookstore';
    public notHome = false;

    constructor(public authService: AuthService,
                public router: Router) {}

    ngOnInit() {
        this.router.events.subscribe(
            (val) => {
                if (val instanceof NavigationEnd) {
                    if(val.url === '/') {
                        this.notHome = false
                    } else {
                        this.notHome = true
                    }
                }
            }
        )
    }

    onRecommended() {
        this.router.navigate(['/books/recommended']);
    }

}
