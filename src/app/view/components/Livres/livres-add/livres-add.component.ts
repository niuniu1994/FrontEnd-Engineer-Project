import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BookService} from "../../../../service/book.service";

@Component({
  selector: 'app-livres-add',
  templateUrl: './livres-add.component.html',
  styleUrls: ['./livres-add.component.scss']
})
export class LivresAddComponent implements OnInit {
  addlivresForm!: FormGroup;
  isFormSubmitted = false;
  constructor(private fb: FormBuilder, private bookService:BookService) { }

  ngOnInit() {

    this.addlivresForm = this.fb.group({
      name: ['', [Validators.required]],
      isbn: ['', Validators.required],
      year: ['', [Validators.required]],
      genre: ['', Validators.required],
      auteur: ['', [Validators.required]],
      description: ['', Validators.required],
      ajout: ['', Validators.required],
      image:['',Validators.required],
    });
  }

  onFileChange(event:any) {
    // @ts-ignore
    if (event.target != null && event.target.files.length > 0) {
      const file = event.target.files[0]
      this.addlivresForm.patchValue({
        ajout: file
      });
    }
  }

  onImageChange(event:any) {
    // @ts-ignore
    if (event.target != null && event.target.files.length > 0) {
      const file = event.target.files[0]
      this.addlivresForm.patchValue({
        image: file
      });
    }
  }

  submitForm(){

    // Set flag to true
    this.isFormSubmitted = true;

    if (this.addlivresForm.invalid) {
      return;
    }
    const formdata = new FormData();
    formdata.append("title",this.addlivresForm.get("name")?.value)
    formdata.append("isbn",this.addlivresForm.get("isbn")?.value)
    formdata.append("date",this.addlivresForm.get("year")?.value)
    formdata.append("category",this.addlivresForm.get("genre")?.value)
    formdata.append("author",this.addlivresForm.get("auteur")?.value)
    formdata.append("description",this.addlivresForm.get("description")?.value)
    formdata.append("ebook",this.addlivresForm.get("ajout")?.value);
    formdata.append("thumbnail",this.addlivresForm.get("image")?.value)

    this.bookService.upload(formdata).subscribe(response =>{
      if (response) {
        window.alert("upload success")
        this.addlivresForm = this.fb.group({
          name: [''],
          isbn: [''],
          year: [''],
          genre: [''],
          auteur: [''],
          description: ['', Validators.required],
          ajout: ['', Validators.required],
          image:['',Validators.required],
        });
      }
    })



  }

}
