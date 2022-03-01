import {Component, Input, OnInit} from '@angular/core';
import {IBookInfoWithComments} from "../../../models/IBookInfo";

@Component({
  selector: 'app-book-component-details',
  templateUrl: './book-component-details.component.html',
  styleUrls: ['./book-component-details.component.scss']
})
export class BookComponentDetailsComponent implements OnInit {

  @Input() book:IBookInfoWithComments = {
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

  constructor() { }

  ngOnInit(): void {
  }

}
