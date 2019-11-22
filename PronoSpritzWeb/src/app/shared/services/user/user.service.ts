import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestService: RequestService) { }

  public login(username: string, password: string) {
    return this.requestService.post('/token', {  grant_type: 'password', username, password })
      .pipe(
        tap(
          ({ access_token }: { access_token: string }) => {
            localStorage.setItem('access_token', access_token);
          }));
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
