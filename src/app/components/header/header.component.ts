import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/reponses/user/user.response';
import { UserService } from 'src/app/service/user.service';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { HttpUtilService } from 'src/app/service/http.util.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userResponse?: UserResponse | null;
  isPopoverOpen = false;
  activeNavItem: number = 0;
  constructor(
    private userService: UserService,
    private popoverConfig: NgbPopoverConfig,
    private tokenService: TokenService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.userResponse = this.userService.getUserToLocalStorage();
  }

  togglePopover(event: Event): void {
    event.preventDefault();
    this.isPopoverOpen = !this.isPopoverOpen;
  }

  handleItemClick(index: number): void {
    debugger

    if (index === 0) {
      this.router.navigate(['/smember']);
    }
    else if (index === 1) {
      alert(index);
    }
    else if (index === 2) {
      this.userService.removeUserToLocalStorage();
      this.tokenService.removeToken();
      this.cartService.clearCart();
      this.userResponse = this.userService.getUserToLocalStorage();
      this.router.navigate(['/login']);
    }
    this.isPopoverOpen = false; // Close the popover after clicking an item
  }



  setActiveNavItem(index: number) {
    debugger
    this.activeNavItem = index;
  }

}
