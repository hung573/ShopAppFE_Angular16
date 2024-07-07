import { TokenService } from './../../service/token.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { LoginDTO } from '../../dtos/user/login.dto';
import { LoginResponse } from 'src/app/reponses/user/login.response';
import { count } from 'rxjs';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginrForm') loginrForm!: NgForm;

  phoneNumber: string = '01234567';
  password: string = '123123';

  roles: Role[] = []; // Mảng roles
  rememberMe: boolean = true;
  selectedRole: Role | undefined; // Biến để lưu giá trị được chọn từ dropdown

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService,
    private roleService: RoleService) {

  }

  onPhoneNumberChange(){
    console.log(`phone Type: ${this.phoneNumber}`);
  }

  ngOnInit() {
    // Gọi API lấy danh sách roles và lưu vào biến roles
    debugger
    this.roleService.getRoles().subscribe({
      next: (roles: Role[]) => { // Sử dụng kiểu Role[]
        debugger
        this.roles = roles;
        this.selectedRole = roles.length > 0 ? roles[1] : undefined;
      },
      error: (error: any) => {
        debugger
          alert(error);
        console.error('Error getting roles:', error);
      }
    });
  }


  login() {
    debugger
    const loginDTO: LoginDTO = {
      phone_number: this.phoneNumber,
      password: this.password,
      role_id: this.selectedRole?.id ?? 0

    };
    debugger
    this.userService.login(loginDTO).subscribe({
        next: (response: LoginResponse) => {
          debugger

        const { token } = response;
        if (this.rememberMe) {
          this.tokenService.setToken(token);
          alert(response.message);

        }
          // this.router.navigate(['/home']);
        },
        complete: () => {
          debugger
        },
        error: (error: any) => {
          alert(error.error.message);
        }
    })
  }

}
