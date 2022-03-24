import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBookInfo} from "../../../models/IBookInfo";
import {BookService} from "../../../service/book.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  books: IBookInfo[] = []
  page: number = 1;
  pageSize: number = 10;
  totalPage: number = 1;
  constructor(private router: ActivatedRoute,private bookService:BookService) {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(data => {
      const title = data.get("title");
      console.log(title)
      if (title != null) {
        this.bookService.searchBook(title).subscribe(response => {
          console.log(response)
          if (response.status == 200) this.books = response.data
          this.page = 1
          this.totalPage = (this.books.length + this.pageSize - 1) / this.pageSize
        })
      }
    })
  }

  nextPage() {
    if (this.page < this.totalPage) {
      this.page += 1
    }
  }

  previousPage() {
    console.log(1)
    if (this.page > 1) {
      this.page -= 1
    }
  }
}
