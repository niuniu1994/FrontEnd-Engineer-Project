import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder,private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', [Validators.required]],
    });
  }

  search() {
    if (this.searchForm.valid){
      console.log(this.searchForm.get("search"))
      this.router.navigate(["search","results",this.searchForm.get("search")?.value])
      this.bookService.searchBook(this.searchForm.get("search")?.value).subscribe(resposne => {
        if ( resposne.status == 200){

        }
      })
    }
  }
}
