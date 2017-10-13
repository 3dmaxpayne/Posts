import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,

    ],
    providers: [
        AuthService,
    ],
})
export class CoreModule {}
