import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./view/pages/home-page/home-page.component";
import {LoginPageComponent} from "./view/pages/login-page/login-page.component";
import {UserDashboardComponent} from "./view/pages/user-dashboard/user-dashboard.component";
import {PdfReaderComponent} from "./view/components/pdf-reader/pdf-reader.component";
import {BookDetailComponent} from "./view/pages/book-detail/book-detail.component";


const routes:Routes = [
  {path: '', component: HomePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'profile',component:UserDashboardComponent},
  {path:'ebook/:ebook_url',component:PdfReaderComponent},
  {path:'book/detail/:id',component:BookDetailComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
