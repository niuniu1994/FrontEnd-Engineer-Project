import {Component, Input, OnInit} from '@angular/core';
import {IBookInfo} from "../../../models/IBookInfo";
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
    @Input() book: IBookInfo = {
      author: ["xxx"],
      category: "Action",
      date: "2018",
      description: "not bad",
      ebookUrl: "",
      isbn: "",
      note: 2.3,
      thumbnail: "https://picsum.photos/id/944/900/500",
      title: "book",
      id:1};

    images: { random: string; picture: string; }[] = [];
    responsiveOptions;

    constructor() {
        this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 3
        }];
    }

    ngOnInit(): void {
        this.images = [
            {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
            {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
            {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
            {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
            {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
            {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
        ];
    }

}
