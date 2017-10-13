import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    token: string;

    constructor(private http: Http) {
    }

    signupUser(email: string, password: string) {

        this.http.post('http://127.0.0.1:8000/api/login', {'email': email, 'password': password})
            .subscribe(
                (response) => {
                    this.token = response.json().token;
                },
                    (error) => {console.log(error)}
            );
    }

    signinUser(email: string, password: string) {
        this.http.post('http://127.0.0.1:8000/api/register', {'email': email, 'password': password})
            .subscribe(
                (response) => {
                    this.token = response.json().token;
                },
                (error) => {console.log(error)}
            );
    }

    logout() {
        this.http.post('http://127.0.0.1:8000/api/register', {});
        this.token = null;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
