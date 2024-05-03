import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, options: Options): Observable<any> {
    return this.http.get(url, options);
  }

  post<T>(url: string, body: any, options: Options): Observable<any> {
    return this.http.post(url, body, options);
  }
}
