import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';
import { tap, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestService: RequestService) { }

  public login(username: string, password: string) {
    // const model = 'username=' + username + '&password=' + password + '&grant_type=' + 'password';


    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'password');
    urlSearchParams.set('username', username);
    urlSearchParams.set('password', password);

    const body = urlSearchParams.toString();

    return this.requestService.post('/Token', body, {
      headers
    }).pipe(map((data: any) => data.access_token));

    // return this.requestService.post('Token', model);

      // return this.requestService.get(
      //   `/Token?grant_type=password&username=${username}&password=${password}`
      // ).pipe(
      //   tap(
      //     ({ access_token }: { access_token: string }) => {
      //       localStorage.setItem('access_token', access_token);
      //     }));
  }

  public register(register: {email: string, password: string, confirmPassword: string}) {
    return this.requestService.post('/api/Account/Register', {
      Email: register.email,
      Password: register.password,
      ConfirmPassword: register.confirmPassword
    }).pipe(
      tap(
        (response) => {
          console.log(response);
        }));
  }
}
