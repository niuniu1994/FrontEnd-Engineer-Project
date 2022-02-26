import {Component, Input, OnInit} from '@angular/core';
import {IBookInfo} from "../../../models/IBookInfo";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth/auth.service";
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
    @Input() book: IBookInfo= {
      author: "",
      category: "",
      description: "",
      ebookUrl: "",
      id: 0,
      isbn: "",
      publishDate: "",
      rate: 0,
      thumbnail: "",
      title: ""

    };

    responsiveOptions;

    constructor(private router:Router,private authService:AuthService) {
        this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 3
        }];
    }

    ngOnInit(): void {

    }

  borrow() {
    if (this.authService.isAuthenticated()){
      this.router.navigate(["ebook",this.book.ebookUrl])
    }
  }

  detail() {
    this.router.navigate(["book","detail",this.book.id])
  }
}
