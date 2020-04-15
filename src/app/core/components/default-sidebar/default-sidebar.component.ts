import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default-sidebar',
  templateUrl: './default-sidebar.component.html',
  styleUrls: ['./default-sidebar.component.css']
})
export class DefaultSidebarComponent implements OnInit {
  @Input("collapsed") collapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
