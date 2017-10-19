import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    user: string;
    error = false;

    constructor(private http: Http) {
        this.user = localStorage.getItem('user') ? localStorage.getItem('user') : null;
    }

    signupUser(email: string, password: string) {

        this.http.post('http://127.0.0.1:8000/api/register', {'email': email, 'password': password})
            .subscribe(
                (response) => {
                    this.user = response.json().user;
                    localStorage.setItem('user', this.user);
                    this.error = false;
                },
                    (error) => {
                        this.error = error.json();
                        console.log(this.error)
                    }
            );
    }

    signinUser(email: string, password: string) {
        this.http.post('http://127.0.0.1:8000/api/login', {'email': email, 'password': password})
            .subscribe(
                (response) => {
                    this.user = response.json().user;
                    localStorage.setItem('user', this.user);
                    this.error = false;
                },
                (error) => {
                    this.error = error.json();
                    console.log(this.error)
                }
            );
    }

    logout() {
        this.http.post('http://127.0.0.1:8000/api/register', {});
        this.user = null;
    }

    isAuthenticated() {
        return this.user != null;
    }
}
