import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { Venda } from './venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService extends BaseResourceService<Venda> {

  constructor(protected injector: Injector) {
    super('http://localhost:8080/vendas', injector, Venda.fromJson);
  }
}