import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IMaskModule} from 'angular-imask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { LoginService } from './pages/login/shared/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IMaskModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
