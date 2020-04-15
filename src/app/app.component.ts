import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sicar-front-end';
  status: boolean = false;

  toggleSidebar() {
    this.status = !this.status;
  }
}
