import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Cliente } from '../../clientes/shared/cliente.model';

export class Venda extends BaseResourceModel<number> {
  constructor(
    public id?: number,
    public clienteId?:number,
    public valor?: number,
    public data?: Date,
    public cliente?: Cliente,
  ) {
    super();
  }

  static fromJson(jsonData: any): Venda {
    return Object.assign(new Venda(), jsonData);
  }
}