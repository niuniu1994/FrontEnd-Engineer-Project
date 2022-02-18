import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './view/pages/login-page/login-page.component';
import { SignInPageComponent } from './view/pages/sign-in-page/sign-in-page.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { NavBarComponent } from './view/components/nav-bar/nav-bar.component';
import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { CardComponent } from './view/components/card/card.component';
import { ChevronsComponent } from './view/components/icons/chevrons/chevrons.component';
import { UserCardComponent } from './view/components/user-card/user-card.component';
import { ListUserComponent } from './view/pages/manage-user/list-user/list-user.component';
import { DetailsUserComponent } from './view/pages/manage-user/details-user/details-user.component';
import { LibraryComponent } from './view/pages/manage-books/library/library.component';
import { FamousBooksComponent } from './view/pages/manage-books/famous-books/famous-books.component';
import { DetailsBooksComponent } from './view/pages/manage-books/details-books/details-books.component';
import { TablesComponent } from './view/components/tables/tables.component';
import { FiltersComponent } from './view/components/filters/filters.component';
import { SearchBarComponent } from './view/components/search-bar/search-bar.component';
import { BookCardComponent } from './view/components/book-card/book-card.component';
import { StarsRateComponent } from './view/components/stars-rate/stars-rate.component';
import { CardSliderComponent } from './view/components/card-slider/card-slider.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignInPageComponent,
    FooterComponent,
    NavBarComponent,
    HomePageComponent,
    CardComponent,
    ChevronsComponent,
    UserCardComponent,
    ListUserComponent,
    DetailsUserComponent,
    LibraryComponent,
    FamousBooksComponent,
    DetailsBooksComponent,
    TablesComponent,
    FiltersComponent,
    SearchBarComponent,
    BookCardComponent,
    StarsRateComponent,
    CardSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
