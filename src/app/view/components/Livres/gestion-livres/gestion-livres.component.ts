import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../../service/book.service";
import {IBookInfo} from "../../../../models/IBookInfo";
import {AuthService} from "../../../../service/auth/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gestion-livres',
  templateUrl: './gestion-livres.component.html',
  styleUrls: ['./gestion-livres.component.scss']
})
export class GestionLivresComponent implements OnInit {
  books:IBookInfo[] = []
  page: number = 1;
  pageSize: number = 10;
  totalPage: number = 1;

  constructor(private router:ActivatedRoute,private bookService:BookService,public authService:AuthService) { }

  ngOnInit(): void {
        this.bookService.getAllBooks().subscribe(response => {
          if (response.status == 200) this.books = response.data
          this.page = 1
          this.totalPage = (this.books.length + this.pageSize - 1) / this.pageSize
        })
  }

  nextPage(){
    if (this.page < this.totalPage){
      this.page += 1
    }
  }

  previousPage(){
    console.log(1)
    if (this.page > 1){
      this.page -= 1
    }
  }

}
