import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login} from '../models/login.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  UserLogin:Login = new Login();
  message:string = "";

  constructor(
    private router: Router,
    private authenService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){

    var result:any;

    this.authenService
      .login(this.UserLogin.username, this.UserLogin.password)
      .subscribe(
        (res) => {
          result = res;
        },
        (err) => {
          this.message = "Invalid username or password";
          console.log(err); //for debugger
        },
        () => {
          //login success
          this.message = "Login successful";
          //save token
          this.authenService.setToken(result.object.accessToken);
          
          console.log(result);
        });
  }

}
