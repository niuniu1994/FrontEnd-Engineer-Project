import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPageComponent} from "./view/pages/login-page/login-page.component";
import { SignInPageComponent } from './view/pages/sign-in-page/sign-in-page.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { NavBarComponent } from './view/components/nav-bar/nav-bar.component';
import { HomePageComponent } from './view/pages/home-page/home-page.component';
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
import { CommentariesComponent } from './view/components/commentaires/commentaries.component';
import { PopupContainsComponent } from './view/components/popup-contains/popup-contains.component';
import { GestionLivresComponent } from './view/components/Livres/gestion-livres/gestion-livres.component';
import { LivresCardComponent } from './view/components/Livres/livres-card/livres-card.component';
import { LivresDetailsComponent } from './view/components/Livres/livres-details/livres-details.component';
import { LivresAddComponent } from './view/components/Livres/livres-add/livres-add.component';
import { HandleUsersComponent } from './view/pages/manage-user/handle-users/handle-users.component';
import { UsersDetailsComponent } from './view/pages/users-details/users-details.component';
import { UserDetailsLivresComponent } from './view/users-pages/user-details-livres/user-details-livres.component';
import { MesLivresComponent } from './view/users-pages/mes-livres/mes-livres.component';
import { MesLivresComponentComponent } from './view/components/Livres-users/mes-livres-component/mes-livres-component.component';
import { MesLivresCardComponent } from './view/components/Livres-users/mes-livres-card/mes-livres-card.component';
import { PdfReaderComponent } from './view/components/pdf-reader/pdf-reader.component';
import { UserDashboardComponent } from './view/pages/user-dashboard/user-dashboard.component';
import {JwtModule} from "@auth0/angular-jwt";
import { BookDetailComponent } from './view/pages/book-detail/book-detail.component';
import {AdminPageComponent} from "./view/pages/admin-page/admin-page.component";
import {DashboardComponentComponent} from "./view/components/dashboard-component/dashboard-component.component";
import {TableauModule} from "ngx-tableau";
import { SearchResultComponent } from './view/components/search-result/search-result.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    DashboardComponentComponent,
    AdminPageComponent,
    AppComponent,
    LoginPageComponent,
    SignInPageComponent,
    FooterComponent,
    NavBarComponent,
    HomePageComponent,
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
    PdfReaderComponent,
    UserDashboardComponent,
    BookComponentDetailsComponent,
    CommentariesComponent,
    PopupContainsComponent,
    GestionLivresComponent,
    LivresCardComponent,
    LivresDetailsComponent,
    LivresAddComponent,
    HandleUsersComponent,
    UsersDetailsComponent,
    UserDetailsLivresComponent,
    MesLivresComponent,
    MesLivresComponentComponent,
    MesLivresCardComponent,
    UserDashboardComponent,
    BookDetailComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      },
    }),
    TableauModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
