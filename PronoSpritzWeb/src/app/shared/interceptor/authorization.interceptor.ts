import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationInterceptor implements HttpInterceptor {

    constructor(
        private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('access_token') || '';
        request = this.cloneRequest(request, token);
        return this.handleNext(request, next);
    }

    private handleNext(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(request);
        return next.handle(request).pipe(
            catchError((error: any) => {
                if (error instanceof HttpErrorResponse && error.status == 401) {
                    this.router.navigate(['login']);
                }
                else if (error instanceof HttpErrorResponse && error.status == 403) {
                    this.router.navigate(['login']);
                }
                throw error;
            }));
    }

    private cloneRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            }
        });
    }
}