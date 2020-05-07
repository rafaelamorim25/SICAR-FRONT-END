import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sicar-front-end';
  status: boolean = false;

  constructor(private router: Router) { }
  toggleSidebar() {
    this.status = !this.status;
  }

  public estouNoLogin(): boolean {
    console.log(this.router.url);
    if (this.router.url === '/login') {
      return true;
    }
    return false;
  }
}
