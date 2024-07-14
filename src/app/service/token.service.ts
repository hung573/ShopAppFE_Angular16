import { Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_KEY = 'user';
  private jwtHelper = new JwtHelperService();
  constructor() { }

  // getter va setter
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // xoa token trong localStorage
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    // localStorage.setItem(this.TOKEN_KEY, JSON.stringify({}));
    // localStorage.setItem(this.USER_KEY, JSON.stringify({}));

  }

  getUserId(): number {
    let userObject = this.jwtHelper.decodeToken(this.getToken() ?? '');
    return 'id' in userObject ? parseInt(userObject['id']) : 0;
  }

  getUserInfoFromTokenn(): any {
    debugger
    return this.jwtHelper.decodeToken(this.getToken() ?? '');
  }
  isTokenExpired(): boolean {
    debugger
    if (this.getToken() == null) {
      return false;
    }
    return this.jwtHelper.isTokenExpired(this.getToken()!);
  }


}
