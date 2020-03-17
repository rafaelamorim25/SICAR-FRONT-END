import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Cliente } from '../../clientes/shared/cliente.model';

export class Recebimento extends BaseResourceModel<number> {
  constructor(
    public id?: number,
    public valor?: number,
    public data?: Date,
    public cliente?: Cliente
  ) {
    super();
  }

  static fromJson(jsonData: any): Recebimento {
    return Object.assign(new Recebimento(), jsonData);
  }
}