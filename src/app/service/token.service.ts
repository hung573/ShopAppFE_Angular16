import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TokenService{
  private readonly TOKEN_KEY = 'access_token';
  constructor() { }

  // getter va setter
  getToken(): string | null{
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setToken(token: string): void{
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // xoa token trong localStorage
  removeToken(): void{
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
