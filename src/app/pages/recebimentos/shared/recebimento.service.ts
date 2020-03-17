import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { Recebimento } from './recebimento.model';

@Injectable({
  providedIn: 'root'
})
export class RecebimentoService extends BaseResourceService<Recebimento> {

  constructor(protected injector: Injector) {
    super('http://localhost:8080/recebimentos', injector, Recebimento.fromJson);
  }
}