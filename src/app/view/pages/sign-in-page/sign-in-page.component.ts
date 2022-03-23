import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../../models/IUser";
import {Router} from "@angular/router";
import {ISignUpUser} from "../../../models/ISignUpUser";
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      country: ['', [Validators.required]],
      streetNumber: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.signUpForm.valid){
      const user:ISignUpUser = {address: {country: this.signUpForm.get("country")?.value, zipCode: this.signUpForm.get("zip")?.value,streetName:this.signUpForm.get("streetName")?.value,streetNumber:this.signUpForm.get("streetNumber")?.value},
        firstName: this.signUpForm.get("firstName")?.value, lastName: this.signUpForm.get("lastName")?.value, password: this.signUpForm.get("password")?.value, email:this.signUpForm.get("email")?.value}
      this.authService.signUp(user).subscribe(response => {
        if (response.status == 200){
          this.router.navigate(["/login"])
        }
      })
    }

  }


}
