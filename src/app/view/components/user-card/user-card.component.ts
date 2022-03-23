import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {IUserInfo} from "../../../models/IUser";
import {from, toArray} from 'rxjs';
import { distinct,map } from 'rxjs/operators';
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {IBookUserId} from "../../../models/IBookUserId";
import {BookService} from "../../../service/book.service";
import {IBookInfo} from "../../../models/IBookInfo";
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements AfterViewInit,OnInit {

  @Input() user:IUserInfo;
  books:IBookInfo[] = []

  categories:string[] = []
  constructor(private  router:Router, private userService:UserService,private bookService:BookService) {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.user?.books != undefined){
      this.user?.books.forEach(id => this.bookService.getBookWithCommentsById(id).subscribe(response => {
        if (response.status == 200) {
          this.books.push(response.data)
          from(this.books).pipe(map(book => book.category),distinct(),toArray()).subscribe(res =>
            this.categories = res
          )
        }
      }))
    }
  }


  return(bookId:number) {
    const userBookId: IBookUserId = {email: this.user.email, bookId}
    this.userService.returnBook(userBookId).subscribe(response => {
      if (response.status == 200) window.location.reload();
    })
  }

  read(bookUrl:string) {
    this.router.navigate(["ebook",bookUrl])
  }
}
