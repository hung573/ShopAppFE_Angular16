import { LoginDTO } from './../dtos/user/login.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDTO } from '../dtos/user/register.dto';
import { environment } from '../enviroments/environment';
import { HttpUtilService } from './http.util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlRegister = `${environment.apiBaseUrl}/users/resigter`;
  private apiUrlLogin = `${environment.apiBaseUrl}/users/login`;
  private apiCongig = {
    headers: this.httpUtilService.createHeaders(),

  };

  constructor(
    private http: HttpClient,
    private httpUtilService: HttpUtilService

  ) { }


  register(registerDTO: RegisterDTO): Observable<any> {
    return this.http.post(this.apiUrlRegister, registerDTO, this.apiCongig);
  }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post(this.apiUrlLogin, loginDTO, this.apiCongig);
  }

}
