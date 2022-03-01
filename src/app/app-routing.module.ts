import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandleBookComponent } from './view/pages/manage-books/handle-book/handle-book.component';
import { HandleUsersComponent } from './view/pages/manage-user/handle-users/handle-users.component';
import { SignInPageComponent } from './view/pages/sign-in-page/sign-in-page.component';
import { UsersDetailsComponent } from './view/pages/users-details/users-details.component';
import {HomePageComponent} from "./view/pages/home-page/home-page.component";
import {PdfReaderComponent} from "./view/components/pdf-reader/pdf-reader.component";
import {BookDetailComponent} from "./view/pages/book-detail/book-detail.component";
import {LoginPageComponent} from "./view/pages/login-page/login-page.component";

const routes:Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'manage-library', component: HandleBookComponent},
  {path: 'my-users', component: HandleUsersComponent},
  {path: 'sign-up', component: SignInPageComponent},
  {path: 'manage-users', component: UsersDetailsComponent},
  {path: 'inscription', component: SignInPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'profile',component:UsersDetailsComponent},
  {path:'ebook/:ebook_url',component:PdfReaderComponent},
  {path:'book/detail/:id',component:BookDetailComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
