import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class  AlertComponent {
  showAlert = false;
  alertMessage = '';

  show(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }

  hide() {
    this.showAlert = false;
  }
}
