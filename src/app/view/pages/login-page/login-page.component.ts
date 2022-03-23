import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }



  submitForm(){
    const user:IUser = {email:this.loginForm.get('username')?.value,password:this.loginForm.get('password')?.value}
    this.authService.login(user).subscribe(response => {
      if (response.status == 200){
        const val = JSON.stringify(response.data)
        console.log(val)
        localStorage.setItem("token",response.data.token);
        this.router.navigateByUrl("")
      }else {
        window.alert("Username or password incorrect")
      }
    })
  }

}
