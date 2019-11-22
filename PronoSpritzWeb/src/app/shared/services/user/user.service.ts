import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestService: RequestService) { }

  public login(username: string, password: string) {
    return this.requestService.post('/login', { username, password })
      .pipe(
        tap(
          ({ token, refreshToken }: { token: string, refreshToken: string }) => {
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
          }));
  }
}
