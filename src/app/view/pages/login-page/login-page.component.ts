import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {IUser} from "../../../models/IUser";
import {AuthService} from "../../../service/auth/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isFormSubmitted = false;



  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit() {
    // this._httpClient.post(this.url,"Authorization", encodedData);

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    // this.loginForm = new FormGroup({
    //   'username' : new FormControl(null, Validators.required),
    //   'password' : new FormControl(null, Validators.required)
    // })
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
