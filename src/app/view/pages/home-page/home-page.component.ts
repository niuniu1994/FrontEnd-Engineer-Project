import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../service/book.service";
import {IBookInfo} from "../../../models/IBookInfo";

type CategoryDto = {
  category:string,
  bookList: IBookInfo[]
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  public categories = ["Classic","Fiction","Historical novel","Romance","Children's literature"];
  public categoryDtoList: CategoryDto[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.categories.forEach(category => {
      this.bookService.getBookByCategory(category).subscribe(response =>
        this.categoryDtoList.push({category:category,bookList:response.data})
      )
    })

  }

}
