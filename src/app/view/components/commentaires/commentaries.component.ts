import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../../models/IComment";
import {FormBuilder, Validators} from "@angular/forms";
import {BookService} from "../../../service/book.service";
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.scss']
})
export class CommentariesComponent implements OnInit {
  @Input() bookId:number;
  @Input() comments:IComment[];
  commentForm = this.fb.group({
    comment:[null,Validators.required]
  });

  constructor(private fb: FormBuilder,private bookService:BookService,private authService:AuthService) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.authService.isAuthenticated()){
      if (this.commentForm.valid){
        const comment:IComment = {bookId: this.bookId, userEmail: this.authService.getUsername(), id:null,note:0,content:this.commentForm.get("comment")?.value}
        this.bookService.addComment(comment).subscribe(response => {
          if ( response.status == 200){
            window.location.reload();
          }else {
            alert("Comment failed")
          }
        })

      }

    }


  }
}

