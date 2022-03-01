import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponse} from "../models/IResponse";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly baseUrl = 'http://localhost:4200/api';

  constructor(private httpClient: HttpClient) {}

  public getBookByCategory(category:string): Observable<IResponse> {
    const url = `${this.baseUrl}/books?category=${category}`;
    return this.httpClient.get<IResponse>(url);
  }

  public getBookWithCommentsById(id: string){
    const url = `${this.baseUrl}/books/${id}`;
    return this.httpClient.get<IResponse>(url);
  }

  public addComment(comment:IComment): Observable<IResponse>{
    const url = `${this.baseUrl}/books/comment`;
    return this.httpClient.post<IResponse>(url,comment);
  }
}
