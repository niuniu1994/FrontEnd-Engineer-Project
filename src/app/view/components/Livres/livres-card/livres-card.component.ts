import {Component, Input, OnInit} from '@angular/core';
import {IBookInfo} from "../../../../models/IBookInfo";
import {Router} from "@angular/router";
import {BookService} from "../../../../service/book.service";
import {AuthService} from "../../../../service/auth/auth.service";
import {IBookUserId} from "../../../../models/IBookUserId";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-livres-card',
  templateUrl: './livres-card.component.html',
  styleUrls: ['./livres-card.component.scss']
})
export class LivresCardComponent implements OnInit {

  @Input() book:IBookInfo;

  constructor(private router:Router,private bookService:BookService,public authService:AuthService,private userService:UserService){}

  ngOnInit(): void {
  }
  detail() {
    this.router.navigate(["book","detail",this.book.id])
  }

  delete() {
    this.bookService.delete(this.book.id).subscribe(response => {
      if (response.status == 200) window.location.reload()
      else window.alert("Can't delete the book")
    })
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
}
