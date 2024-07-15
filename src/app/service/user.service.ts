import { LoginDTO } from './../dtos/user/login.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDTO } from '../dtos/user/register.dto';
import { environment } from '../enviroments/environment';
import { HttpUtilService } from './http.util.service';
import { UserResponse } from '../reponses/user/user.response';
import { UserUpdateDTO } from '../dtos/user/user.update.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlUser = `${environment.apiBaseUrl}/users`;
  private apiCongig = {
    headers: this.httpUtilService.createHeaders(),
  };

  constructor(
    private http: HttpClient,
    private httpUtilService: HttpUtilService

  ) { }


  register(registerDTO: RegisterDTO): Observable<any> {
    return this.http.post(`${this.apiUrlUser}/regiser`, registerDTO, this.apiCongig);
  }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post(`${this.apiUrlUser}/login`, loginDTO, this.apiCongig);
  }

  updateUser(token: string, userUpdateDTO: UserUpdateDTO): Observable<any> {
    debugger
    let userResponse = this.getUserToLocalStorage();
    return this.http.put(`${this.apiUrlUser}/details/${userResponse?.id}`, userUpdateDTO, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    });
  }

  getUserDetails(token: string) {
    return this.http.post(
      `${this.apiUrlUser}/details`,
      {
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        })
      }
    );
  }

  saveUserToLocalStorage(userResponse?: UserResponse) {
    try {
      debugger;
      if (userResponse == null || !userResponse) {
        return;
      }

      // Convert the userResponse object to a Json string
      const userResponseJSON = JSON.stringify(userResponse);
      // Save the Json string to local storage with a key 'userResponse'
      localStorage.setItem('user', userResponseJSON);

      console.log('userResponse saved to local storage');
    } catch (error) {
      console.error('Error saving userResponse to local storage: ', error);
    }
  }

  getUserToLocalStorage(): UserResponse | null {
    try {
      debugger
      const userResponseJSON = localStorage.getItem('user');
      if (userResponseJSON == null || userResponseJSON == undefined || userResponseJSON == '{}') {
        return null;
      }
      const userResponse = JSON.parse(userResponseJSON!);
      return userResponse;
    } catch (error) {
      console.error('Error get user to local storage: ', error);
      return null;
    }
  }

  removeUserToLocalStorage(): void {
    try {
      // localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify({}));
    } catch (error) {
      console.error('Error removing user data from local storage:', error);
    }
  }

}
