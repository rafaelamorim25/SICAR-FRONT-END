import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { Recebimento } from './recebimento.model';

@Injectable({
  providedIn: 'root'
})
export class RecebimentoService extends BaseResourceService<Recebimento> {

  constructor(protected injector: Injector) {
    super('https://sicar-app.herokuapp.com/recebimentos', injector, Recebimento.fromJson);
  }
}