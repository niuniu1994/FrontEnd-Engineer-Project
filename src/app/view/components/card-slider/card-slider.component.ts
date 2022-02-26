import {Component, Input, OnInit} from '@angular/core';
import {IBookInfo} from "../../../models/IBookInfo";

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {
  @Input() bookCategory: string = "Default";
  @Input() bookList:IBookInfo[] = [{
    author: ["xxx"],
    category: "Action",
    date: "2018",
    description: "not bad",
    ebookUrl: "",
    isbn: "",
    note: 2.3,
    thumbnail: "https://picsum.photos/id/944/900/500",
    title: "book",
    id:1}, {
      author: ["bbb"],
      category: "Comedy",
      date: "2010",
      description: "not bad",
      ebookUrl: "",
      isbn: "",
      note: 4.1,
      thumbnail: "https://picsum.photos/id/984/900/500",
      title: "book",
      id:1}];

  constructor() { }

  ngOnInit(): void {
  }

}
