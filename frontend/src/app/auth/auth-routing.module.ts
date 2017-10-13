import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from 'app/auth/signin/signin.component';

const authRouts: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
];

@NgModule({
    imports: [RouterModule.forChild(authRouts)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
