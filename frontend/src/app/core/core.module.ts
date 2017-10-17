import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        MenuComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule
    ],
    exports: [
        AppRoutingModule,
        MenuComponent,
        HeaderComponent,

    ],
    providers: [
        AuthService,
    ],
})
export class CoreModule {}
