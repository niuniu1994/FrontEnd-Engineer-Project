import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from "../../../service/auth/auth.service";
import {IUser} from "../../../models/IUser";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  url= "http://localhost:8080/login";
  //encodedData = "Basic " + btoa(username:password)



  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit() {
    // this._httpClient.post(this.url,"Authorization", encodedData);

    this.loginForm = this.fb.group({
      username: [],
      password: [],
    })
  }

  submitForm(){
    const formData = new FormData();
    formData.set("email",this.loginForm.get('username')?.value)
    formData.set("password",this.loginForm.get('password')?.value)
    const user:IUser = {email:this.loginForm.get('username')?.value,password:this.loginForm.get('password')?.value}
    this.authService.login(formData).subscribe(response => {
      if (response.status == 200){
        localStorage.setItem("token",response.data);
        this.router.navigateByUrl("")
      }else {
        window.alert("Username or password incorrect")
      }
    })
  }

}
