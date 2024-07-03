import { UserService } from './../service/user.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterDTO } from '../dtos/register.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm!: NgForm;

  // khai báo biến tương ứng với các trường dữ liệu trong form
  phone: string;
  password: string;
  retypePassword: string;
  fullName: string;
  addRess: string;
  isAccepted: boolean;
  dateOfBirth: Date;

  constructor( private router: Router, private userService: UserService){
    this.phone = '';
    this.password = '';
    this.retypePassword  = '';
    this.fullName = '';
    this.addRess = '';
    this.isAccepted = false;
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);
    // inject
  }

  onPhoneChange(){
    console.log(`phone Type: ${this.phone}`);
  }

  register() {
    const registerDTO: RegisterDTO = {
      "fullname": this.fullName,
      "phone_number": this.phone,
      "address": this.addRess,
      "password": this.password,
      "retype_password": this.retypePassword,
      "date_of_birth": this.dateOfBirth,
      "facebook_account_id": 0,
      "google_account_id": 0
    };

    this.userService.register(registerDTO).subscribe({
        next: (response: any) => {
          debugger
          this.router.navigate(['/login']);
        },
        complete: () => {
          debugger
        },
        error: (error: any) => {
          alert(`Cannot register, error: ${error.error}`)
        }
    })
  }

  //check mk gõ lại
  checkPasswordsMatch() {
    if (this.password !== this.retypePassword) {
      this.registerForm.form.controls['retypePassword']
            .setErrors({ 'passwordMismatch': true });
    } else {
      this.registerForm.form.controls['retypePassword'].setErrors(null);
    }
  }

  // check fullName
  isFullNameInvalid(): boolean {
    return !this.fullName || this.fullName.trim().length === 0;
  }
  // check Address
  isAddRessInvalid(): boolean {
    return !this.addRess || this.addRess.trim().length === 0;
  }
  //check ngay sinh > 18
  checkAge() {
    if (this.dateOfBirth) {
      const today = new Date();
      const birthDate = new Date(this.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        this.registerForm.form.controls['dateOfBirth'].setErrors({ 'invalidAge': true });
      } else {
        this.registerForm.form.controls['dateOfBirth'].setErrors(null);
      }
    }
  }
}
