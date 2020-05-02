import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router){}

  login(user: Usuario){
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    const resp: Observable<HttpResponse<any>> = this.http.post<HttpResponse<any>>
    ('https://sicar-app.herokuapp.com/login', JSON.stringify(user), {headers: headers, observe: 'response'});

    resp.subscribe(
      r => {
          if(r.headers.get('Authorization') !== null){
            localStorage.setItem('Authorization', r.headers.get('Authorization'));
            this.router.navigate(['/clientes']);
          }
      }
    );
  }

  logout() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/login']);
  }
}
