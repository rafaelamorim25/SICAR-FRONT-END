import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/pages/login/shared/login.service';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.css']
})
export class DefaultNavbarComponent {
  @Input() collapsed:Boolean;
  @Output() collapsedChange = new EventEmitter();

  constructor(
    private loginService: LoginService,
  ) { }

    logout(){
      this.loginService.logout();
    }

    toggleSidebar() {
      this.collapsed = !this.collapsed;
      this.collapsedChange.emit(this.collapsed);
    }

}
