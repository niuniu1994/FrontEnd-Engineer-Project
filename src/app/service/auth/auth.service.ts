import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponse} from "../../models/IResponse";
import {JwtHelperService} from "@auth0/angular-jwt";
import {ISignUpUser} from "../../models/ISignUpUser";
import {IUser} from "../../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = 'http://localhost:4200/api';
  private readonly helper = new JwtHelperService();
  constructor(private httpClient: HttpClient, private jwtHelper:JwtHelperService) {}

  public login(user:IUser): Observable<IResponse> {
    const url = `${this.baseUrl}/user/login`;
    return this.httpClient.post<IResponse>(url,user);
  }

  public signUp(user:ISignUpUser){
    const url = `${this.baseUrl}/user/signup`;
    return this.httpClient.post<IResponse>(url,user);
  }

  public logOut(){
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    const token = this.getToken()
    // Check whether the token is expired and return
    // true or false

    if (token != null){
      if (this.helper.isTokenExpired(token)){
        // @ts-ignore
        localStorage.clear();
        return false;
      }else return true
    }
    return false;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public getUsername() {
    const token = this.getToken()
    if (token != undefined) {
      return this.jwtHelper.decodeToken(token).username
    }
    return null;
  }

  public getRole(){
      const token = this.getToken()
      if (token != undefined) {
        return this.jwtHelper.decodeToken(token).role
      }
      return null;
    }

    public isAdmin(){
    return this.getRole() == "admin";
  }
}


