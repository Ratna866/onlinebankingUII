import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signOut() {
    throw new Error('Method not implemented.');
  }
  getRoleFromToken() {
    throw new Error('Method not implemented.');
  }
  getfullNameFromToken() {
    throw new Error('Method not implemented.');
  }
  private baseUrl:string = "https://localhost:7164/api/User/";

  constructor(private http : HttpClient) { }

  signup(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }
}
