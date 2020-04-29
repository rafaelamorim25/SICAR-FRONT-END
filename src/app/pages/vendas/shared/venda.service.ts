import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { Venda } from './venda.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendaService extends BaseResourceService<Venda> {

  constructor(protected injector: Injector) {
    super('https://sicar-app.herokuapp.com/vendas', injector, Venda.fromJson);
  }
}