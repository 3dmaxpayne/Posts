import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class AuthService {
    user: string;

    constructor(private http: Http) {
        this.user = localStorage.getItem('user') ? localStorage.getItem('user') : null;
    }

    signupUser(email: string, password: string) {

        return this.http.post('http://posts.loc/api/register', {'email': email, 'password': password},)
            .map(
                (response) => {
                    console.log(response);
                    this.user = response.json().user;
                    localStorage.setItem('user', this.user);
                    return response;
                },
            );
    }

    signinUser(email: string, password: string) {
        return this.http.post('http://posts.loc/api/login', {'email': email, 'password': password})
            .map(
                (response) => {
                    this.user = response.json().user;
                    localStorage.setItem('user', this.user);
                    return response;
                }
            );
    }

    logout() {
        this.http.post('http://posts.loc/api/logout', {});
        this.user = null;
    }

    isAuthenticated() {
        return this.user != null;
    }
}
