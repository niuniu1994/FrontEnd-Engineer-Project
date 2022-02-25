import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './view/components/login-page/login-page.component';
import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { DescriptionBooksComponent } from './view/pages/manage-books/description-books/description-books.component';
import { HandleBookComponent } from './view/pages/manage-books/handle-book/handle-book.component';
import { LibraryComponent } from './view/pages/manage-books/library/library.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'accueil', component: HomePageComponent},
  {path: 'gerer-ma-bibliotheque', component: HandleBookComponent},
  {path: 'description-livre', component: DescriptionBooksComponent},
  {path: 'ma-bibliotheque', component: LibraryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent, HomePageComponent, HandleBookComponent, DescriptionBooksComponent, LibraryComponent]
