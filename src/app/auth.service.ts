import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface MyData {
  success: boolean,
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = JSON.parse(localStorage.getItem('logado') || 'false');

  constructor(private http: HttpClient) { }

  setLoggedIn(valor: boolean){
    this.loggedIn = valor;
    localStorage.setItem('logado', 'true');
  }

  get isLoggedIn(){
    return this.isLoggedIn;
  }

  getUserPassInformation(username, password){
    return this.http.post<MyData>('/api/auth.php',{
      username,
      password
    });

  }


}
