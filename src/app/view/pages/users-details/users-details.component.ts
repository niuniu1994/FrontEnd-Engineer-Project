import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  user:any;

  constructor(private authService:AuthService,private userService:UserService) {
    if (authService.isAuthenticated()){
      console.log("authenticated")
    this.userService.getUserCompleteInfoByEmail(this.authService.getUsername()).subscribe(response => {
      if (response.status == 200){
        this.user = response.data;
      }
    })
    }
  }

  ngOnInit(): void {
  }

}
