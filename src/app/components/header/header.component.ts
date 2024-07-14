import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/reponses/user/user.response';
import { UserService } from 'src/app/service/user.service';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userResponse?: UserResponse | null;
  isPopoverOpen = false;
  constructor(
    private userService: UserService,
    private popoverConfig: NgbPopoverConfig,
    private tokenService: TokenService,
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
    alert(`Clicked on "${index}"`);
    if (index === 2) {
      this.userService.removeUserToLocalStorage();
      this.tokenService.removeToken();
      this.userResponse = this.userService.getUserToLocalStorage();
    }
    this.isPopoverOpen = false; // Close the popover after clicking an item
  }


}
