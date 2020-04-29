import { Injectable, Injector } from '@angular/core';
import { Cliente } from './cliente.model';

import { BaseResourceService } from '../../../shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseResourceService<Cliente> {

  constructor(protected injector: Injector) {
    super('https://sicar-app.herokuapp.com/clientes', injector, Cliente.fromJson);
  }
}
