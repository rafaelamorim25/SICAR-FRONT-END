import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DefaultNavbarComponent } from './components/default-navbar/default-navbar.component';
import { DefaultSidebarComponent } from './components/default-sidebar/default-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    DefaultNavbarComponent,
    DefaultSidebarComponent
  ],
  exports: [
    // shared modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DefaultNavbarComponent,
    DefaultSidebarComponent
  ]
})
export class CoreModule { }
