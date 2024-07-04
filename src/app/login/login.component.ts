import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { LoginDTO } from '../dtos/user/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginrForm') loginrForm!: NgForm;

  phoneNumber: string;
  password: string;

  constructor( private router: Router, private userService: UserService) {
    this.phoneNumber = '';
    this.password = '';
  }

  onPhoneNumberChange(){
    console.log(`phone Type: ${this.phoneNumber}`);
  }

  login() {
    const loginDTO: LoginDTO = {
      "phone_number": this.phoneNumber,
      "password": this.password
    };

    this.userService.login(loginDTO).subscribe({
        next: (response: any) => {
          debugger
          this.router.navigate(['/home']);
        },
        complete: () => {
          debugger
        },
        error: (error: any) => {
          alert(`Cannot login, error: ${error.error}`)
        }
    })
  }

}
