import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './view/components/login-page/login-page.component';
import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { DescriptionBooksComponent } from './view/pages/manage-books/description-books/description-books.component';
import { HandleBookComponent } from './view/pages/manage-books/handle-book/handle-book.component';
import { LibraryComponent } from './view/pages/manage-books/library/library.component';
import { HandleUsersComponent } from './view/pages/manage-user/handle-users/handle-users.component';
import { SignInPageComponent } from './view/pages/sign-in-page/sign-in-page.component';
import { UsersDetailsComponent } from './view/pages/users-details/users-details.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'manage-library', component: HandleBookComponent},
  {path: 'book-description', component: DescriptionBooksComponent},
  {path: 'my-library', component: LibraryComponent},
  {path: 'my-users', component: HandleUsersComponent},
  {path: 'sign-up', component: SignInPageComponent},
  {path: 'manage-users', component: UsersDetailsComponent},
  {path: 'inscription', component: SignInPageComponent},
  {path: 'inscription', component: SignInPageComponent}


const routes:Routes = [
  {path: '', component: HomePageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
