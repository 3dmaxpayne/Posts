import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecommendedComponent } from './recommended/recommended.component';
import { AllComponent } from './all/all.component';
import { TopComponent } from './top/top.component';
import { BookItemComponent } from './book-item/book-item.component';
import { CommentedComponent } from './commented/commented.component';
import { SalesComponent } from './sales/sales.component';
import { NewestComponent } from './newest/newest.component';

const routes: Routes = [
    {path: '', component: AllComponent, children: [
        {path: 'ranked', component: TopComponent},
        {path: 'commented', component: CommentedComponent},
        {path: 'recommended', component: RecommendedComponent},
        {path: 'sales', component: SalesComponent},
        {path: 'newest', component: NewestComponent},
        {path: ':id', component: BookItemComponent},
    ] },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class BookRoutingModule {

}