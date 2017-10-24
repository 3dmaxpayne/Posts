import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './core/main/main.component';


const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'books', loadChildren: './books/books.module#BooksModule' },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
