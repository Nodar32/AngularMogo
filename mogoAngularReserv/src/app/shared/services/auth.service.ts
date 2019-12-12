import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces/interfaces";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersUrl = "https://mogoangularproject.firebaseio.com/users.json"
  authFlag = true;
  constructor(private http: HttpClient, private router: Router) { }
  addUser(user:IUser): Observable<IUser>{
    return this.http.post<IUser>(this.usersUrl, user)
  }
  checkUserAvaileble(email, password){
    this.http.get<IUser[]>(this.usersUrl).subscribe(response => {
      response.forEach((user: IUser) => {
        if(user.email === email && user.password === password) {
          this.authFlag = true;
        }
      });
      if(this.authFlag){
        this.createToken();
        this.router.navigate(['/', 'admin', 'dashboard']);
      } else {
        alert('Not log');
      }
    })
  }
  createToken(){
    const expDate = new Date(new Date().getTime() + 3600 * 1000); // Время хранения токена
    localStorage.setItem('logOutTime', expDate.toString())
  }
  logout() {
    this.authFlag = false;
  }
  login(){
    this.authFlag = true;
  }

}
