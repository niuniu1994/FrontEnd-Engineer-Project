import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBookInfo, IBookInfoWithComments} from "../../../models/IBookInfo";
import {BookService} from "../../../service/book.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public book: IBookInfoWithComments={
    author: "",
    category: "",
    comments: [],
    description: "",
    ebookUrl: "",
    isbn: "",
    publishDate: "",
    rate: 0,
    thumbnail: "",
    title: "",
    id:2};

  constructor(private router:ActivatedRoute,private bookService:BookService) {
    this.router.paramMap.subscribe(data =>{
      const id = data.get("id");
      if (id != null) this.bookService.getBookWithCommentsById(id).subscribe(response => {
        if (response.status==200) this.book = response.data;
        else alert("error")
      })
    });
  }


  ngOnInit(): void {

  }

}
