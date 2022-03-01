import {Component, Input, OnInit} from '@angular/core';
import {IBookInfo} from "../../../models/IBookInfo";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth/auth.service";
import {UserService} from "../../../service/user.service";
import {IBookUserId} from "../../../models/IBookUserId";
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
      isbn: "",
      publishDate: "",
      rate: 0,
      thumbnail: "",
      title: "",
      id:1};

    responsiveOptions;

    constructor(private router:Router,private authService:AuthService,private userService:UserService) {
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
      const bookUserId:IBookUserId= {email:this.authService.getUsername(),bookId:this.book.id}
      this.userService.borrowBook(bookUserId).subscribe(response => {
        if (response.status==200) this.router.navigate(["ebook",this.book.ebookUrl])
        else alert("you can't borrow this book")
      })
    }
  }

  detail() {
    this.router.navigate(["book","detail",this.book.id])
  }
}
