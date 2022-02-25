import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginPageComponent } from './view/components/login-page/login-page.component';
import { SignInPageComponent } from './view/pages/sign-in-page/sign-in-page.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { NavBarComponent } from './view/components/nav-bar/nav-bar.component';
// import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { CardComponent } from './view/components/card/card.component';
import { ChevronsComponent } from './view/components/icons/chevrons/chevrons.component';
import { UserCardComponent } from './view/components/user-card/user-card.component';
import { TablesComponent } from './view/components/tables/tables.component';
import { FiltersComponent } from './view/components/filters/filters.component';
import { SearchBarComponent } from './view/components/search-bar/search-bar.component';
import { BookCardComponent } from './view/components/book-card/book-card.component';
import { StarsRateComponent } from './view/components/stars-rate/stars-rate.component';
import { CardSliderComponent } from './view/components/card-slider/card-slider.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BookComponentDetailsComponent } from './view/components/book-component-details/book-component-details.component';
import { CommentairesComponent } from './view/components/commentaires/commentaires.component';
import { PopupContainsComponent } from './view/components/popup-contains/popup-contains.component';
import { GestionLivresComponent } from './view/components/Livres/gestion-livres/gestion-livres.component';
import { LivresCardComponent } from './view/components/Livres/livres-card/livres-card.component';
import { LivresDetailsComponent } from './view/components/Livres/livres-details/livres-details.component';
import { LivresAddComponent } from './view/components/Livres/livres-add/livres-add.component';
import { HandleUsersComponent } from './view/pages/manage-user/handle-users/handle-users.component';
import { UsersDetailsComponent } from './view/pages/users-details/users-details.component';
import { UserLibraryComponent } from './view/users-pages/user-library/user-library.component';
import { UserDetailsLivresComponent } from './view/users-pages/user-details-livres/user-details-livres.component';
import { MesLivresComponent } from './view/users-pages/mes-livres/mes-livres.component';
import { MesLivresComponentComponent } from './view/components/Livres-users/mes-livres-component/mes-livres-component.component';
import { MesLivresCardComponent } from './view/components/Livres-users/mes-livres-card/mes-livres-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    FooterComponent,
    NavBarComponent,
    CardComponent,
    ChevronsComponent,
    UserCardComponent,
    TablesComponent,
    FiltersComponent,
    SearchBarComponent,
    BookCardComponent,
    StarsRateComponent,
    CardSliderComponent,
    BookComponentDetailsComponent,
    CommentairesComponent,
    PopupContainsComponent,
    GestionLivresComponent,
    LivresCardComponent,
    LivresDetailsComponent,
    LivresAddComponent,
    HandleUsersComponent,
    UsersDetailsComponent,
    UserLibraryComponent,
    UserDetailsLivresComponent,
    MesLivresComponent,
    MesLivresComponentComponent,
    MesLivresCardComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
