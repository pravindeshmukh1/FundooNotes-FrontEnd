import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  id = localStorage.getItem('id');
  header = {
    id: this.id,
  };

  httpOption = new HttpHeaders(this.header);

  post(url, user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(environment.baseUrl + url, user, httpOptions);
  }

  get(url) {
    return this.http.get(environment.baseUrl + url, {
      headers: this.httpOption,
    });
  }

  postAuth(url: string, note: Object) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      }),
    };
    return this.http.post(environment.baseUrl + url, note, httpOption);
  }

  getAuth(url) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      }),
    };
    return this.http.get(environment.baseUrl + url, httpOption);
  }

  getAll(url) {
    return this.http.get(environment.baseUrl + url);
  }
}
