import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  url = "http://localhost:8080/home";

  constructor(private fb: FormBuilder, private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [],
      password: [],
    })


  }

  submitForm() {
    let usernamePassword = this.loginForm.get('username')?.value+':'+this.loginForm.get('password')?.value

    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(usernamePassword)}`)
    }

    console.log("hello")
    this._httpClient.get(this.url, header).subscribe(response => console.log(response))

  }

}
