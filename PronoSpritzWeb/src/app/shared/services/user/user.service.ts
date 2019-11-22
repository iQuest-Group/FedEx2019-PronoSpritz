import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestService: RequestService) { }

  public login(username: string, password: string) {
    return this.requestService.post('/Token', 
    {  grant_type: 'password', username, password },
    {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8'
      })
    })
      .pipe(
        tap(
          ({ access_token }: { access_token: string }) => {
            localStorage.setItem('access_token', access_token);
          }));
      // return this.requestService.get(
      //   `/Token?grant_type=password&username=${username}&password=${password}`
      // ).pipe(
      //   tap(
      //     ({ access_token }: { access_token: string }) => {
      //       localStorage.setItem('access_token', access_token);
      //     }));
  }

  public register(register: {email: string, password: string, confirmPassword: string}){
    return this.requestService.post('/api/Account/Register', {
      "Email": register.email, 
      "Password": register.password, 
      "ConfirmPassword": register.confirmPassword
    }).pipe(
      tap(
        (response) => {
          console.log(response);
        }));
  }
}
