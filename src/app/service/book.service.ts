import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponse} from "../models/IResponse";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly baseUrl = 'http://localhost:4200/e-lib';

  constructor(private httpClient: HttpClient) {}

  // autocomplete search bar according to the input text
  public getBookByCategory(category:string): Observable<IResponse> {
    const url = `${this.baseUrl}/books?category=${category}`;
    return this.httpClient.get<IResponse>(url);
  }
}
