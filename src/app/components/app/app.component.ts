import { HeaderComponent } from './../header/header.component';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHeader: boolean = true;
  isUserPage: boolean = false;
  isAdminPage: boolean = false;
  constructor(
    private router: Router,
    private renderer: Renderer2
  ) { }
  ngOnInit(): void {
    debugger
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Kiểm tra đường dẫn hiện tại
        debugger
        const isAdminPage = event.url.includes('admin');
        this.showHeader = !isAdminPage;

        // Thay đổi kiểu của body
        if (isAdminPage) {
          this.renderer.removeStyle(document.body, 'padding-top');
        } else {
          this.renderer.setStyle(document.body, 'padding-top', '80px');
        }
      }
    });
  }

}
