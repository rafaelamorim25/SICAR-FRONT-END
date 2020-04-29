import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { RecebimentosReport, Intervalo } from './recebimentosreport.model';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecebimentosReportService extends BaseResourceService<RecebimentosReport> {

  constructor(protected injector: Injector) {
    super('https://sicar-app.herokuapp.com/relatorios/recebimentos', injector, RecebimentosReport.fromJson);
  }

  getRelatorio(intervalo: Intervalo): Observable<RecebimentosReport> {

    return this.http.post(this.apiPath, intervalo).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    )
  }
}