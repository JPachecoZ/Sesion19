import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private apiUri: string = "https://expensable-api.herokuapp.com"

  constructor(
    private http: HttpClient,
  ) { }

  login(credentials: any){
    return this.http.post(`${this.apiUri}/login`, credentials)
  }
}
