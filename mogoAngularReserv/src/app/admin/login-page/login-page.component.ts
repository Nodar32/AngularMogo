import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {IUser} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  flag = true;
  authorizationForm: FormGroup;
  registrationForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authorizationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      userName: new FormControl('', [Validators.required])
    });
  }
  authorization() {
    if (this.authorizationForm.invalid) {
      return
    } else {
      this.authService.checkUserAvaileble(this.authorizationForm.get('email').value, this.authorizationForm.get('password').value)
    }
  }
  registration() {
    if (this.registrationForm.invalid) {
      return
    } else {
      // console.log("registration");
      // const user:IUser = {
      //   userName: this.registrationForm.get('userName').value,
      //   email: this.registrationForm.get('email').value,
      //   password: this.registrationForm.get('password').value
      // }
      // this.authService.addUser(user).subscribe();
      // this.flag = true;
      alert('registration not working');
    }
  }


}
