import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    public register = false;
    public error = false;

    constructor(public authService: AuthService,
                private router: Router) { }

    ngOnInit() {
    }

    onSignin(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signinUser(email, password)
            .subscribe(
                (response) => {
                    if (response.status === 200) {
                        this.router.navigateByUrl('/');
                    }
                },
                (error) => {
                    console.log(error);
                    this.error = error;
                }
        );
    }

    onSignup(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signupUser(email, password)
            .subscribe(
            tokenData => console.log(tokenData),
                (error) => {
                    console.log(error);
                    this.error = error;
                }
        );
    }

    onSwitch() {
        this.register = !this.register;
    }

}
