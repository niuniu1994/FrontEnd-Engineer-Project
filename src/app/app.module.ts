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
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
