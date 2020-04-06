import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/pages/login/shared/login.service';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.css']
})
export class DefaultNavbarComponent {

  constructor(
    private loginService: LoginService,
  ) { }

    logout(){
      this.loginService.logout();
    }



}
