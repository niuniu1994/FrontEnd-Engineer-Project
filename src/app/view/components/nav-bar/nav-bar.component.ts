import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth/auth.service";
import {JwtHelperService} from "@auth0/angular-jwt";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  opened = false;
  public token:any = "Login";
  constructor(private router:Router,private authService:AuthService,private jwtHelper:JwtHelperService) {
      const token = this.authService.getToken();
      if (token != null){
        this.token = this.jwtHelper.decodeToken(token).username
      }
  }

  ngOnInit(): void {
  }


  login() {
    if (!this.authService.isAuthenticated()){
      this.router.navigate(["login"])
    }else {
      this.router.navigate(["profile"])
    }
  }
}
