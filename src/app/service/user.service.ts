import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponse} from "../models/IResponse";
import {IBookUserId} from "../models/IBookUserId";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'http://localhost:4200/api';

  constructor(private httpClient: HttpClient) {}

  public getUserCompleteInfoByEmail(email:string): Observable<IResponse> {
    const url = `${this.baseUrl}/user/${email}/complete`;
    return this.httpClient.get<IResponse>(url);
  }

  public borrowBook(bookUserId:IBookUserId): Observable<IResponse> {
    const url = `${this.baseUrl}/user/book`;
    return this.httpClient.post<IResponse>(url,bookUserId);
  }

  public returnBook(bookUserId:IBookUserId): Observable<IResponse> {
    const url = `${this.baseUrl}/user/book`;
    return this.httpClient.patch<IResponse>(url,bookUserId);
  }

}
