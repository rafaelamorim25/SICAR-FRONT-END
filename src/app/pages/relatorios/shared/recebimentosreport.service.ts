import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { RecebimentosReport, Intervalo } from './recebimentosreport.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecebimentosReportService extends BaseResourceService<RecebimentosReport> {

  constructor(protected injector: Injector) {
    super('https://sicar-app.herokuapp.com/relatorios/recebimentos', injector, RecebimentosReport.fromJson);
  }

  get(intervalo: Intervalo): Observable<RecebimentosReport> {
    return this.http.post(this.apiPath, intervalo).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    )
  }
}