import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/reponses/user/user.response';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userResponse?: UserResponse | null;
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.userResponse = this.userService.getUserToLocalStorage();
  }
  logout() {
    this.userService.removeUserToLocalStorage();
    this.tokenService.removeToken();
    this.userResponse = this.userService.getUserToLocalStorage();
    this.router.navigate(['/login'])
  }

}
