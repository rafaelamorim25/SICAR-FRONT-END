import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IMaskModule} from 'angular-imask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { LoginService } from './pages/login/shared/login.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/Intercept.service';
import { ExcluirEmpresaDialogComponent } from './pages/manter-empresa/excluir-empresa-dialog/excluir-empresa-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcluirEmpresaDialogComponent
  ],
  imports: [
    IMaskModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
