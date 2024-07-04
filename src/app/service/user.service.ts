import { LoginDTO } from './../dtos/user/login.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDTO } from '../dtos/user/register.dto';
import { enviroment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlRegister = `${enviroment.apiBaseUrl}/users/resigter`;
  private apiUrlLogin = `${enviroment.apiBaseUrl}/users/login`;
  private apiCongig = {
    headers: this.createHeaders()
  };

  constructor(private http: HttpClient) { }

  private createHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'vi'
    });
  }

  register(registerDTO: RegisterDTO): Observable<any>{
    return this.http.post(this.apiUrlRegister, registerDTO, this.apiCongig);
  }

  login(loginDTO: LoginDTO): Observable<any>{
    return this.http.post(this.apiUrlLogin, loginDTO, this.apiCongig);
  }

}
