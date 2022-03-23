import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponse} from "../models/IResponse";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly baseUrl = 'http://localhost:4200/api';

  constructor(private httpClient: HttpClient) {}

  public getAllBooks():Observable<IResponse>{
    const url = `${this.baseUrl}/books/all`;
    return this.httpClient.get<IResponse>(url);
  }

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

  upload(formdata: FormData) {
    const url = `${this.baseUrl}/books/upload`;
    return this.httpClient.post<IResponse>(url,formdata);
  }

  delete(id: number):Observable<IResponse>{
    const url = `${this.baseUrl}/books/${id}`;
    return this.httpClient.delete<IResponse>(url);
  }

  searchBook(title: string):Observable<IResponse> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("title",title);
    const url = `${this.baseUrl}/books`;
    return this.httpClient.get<IResponse>(url,{params:httpParams});
  }
}
