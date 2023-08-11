import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(userData: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/userLists", userData);
  }

  login(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/userLists");
  }

  getUserList(): Observable<any> {
    
    return this.http.get<any>("http://localhost:3000/userLists");
}
}
