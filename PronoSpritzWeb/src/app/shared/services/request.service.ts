import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public get<T>(relativeUrl: string): Observable<T> {
    return this.httpClient.get<T>(this.buildUrl(relativeUrl));
  }

  public post<T>(relativeUrl: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.buildUrl(relativeUrl), body);
  }

  public put<T>(relativeUrl: string, body: any): Observable<T> {
    return this.httpClient.put<T>(this.buildUrl(relativeUrl), body);
  }

  public delete<T>(relativeUrl: string, body: any): Observable<T> {
    return this.httpClient.delete<T>(this.buildUrl(relativeUrl));
  }

  private buildUrl(relativeUrl): string
  {
    return `${this.baseUrl}${relativeUrl}`;
  }
}
