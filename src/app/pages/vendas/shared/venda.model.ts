import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Cliente } from '../../clientes/shared/cliente.model';

export class Venda extends BaseResourceModel<number> {
  constructor(
    public id?: number,
    public clienteId?:number,
    public valor?: number,
    public data?: Date,
    public cliente?: Cliente,
    public formaPagamento?: FormaPagamento,
    public formaPagamentoId?: number
  ) {
    super();
  }

  static fromJson(jsonData: any): Venda {
    return Object.assign(new Venda(), jsonData);
  }
}

export class FormaPagamento extends BaseResourceModel<number> {
  constructor(
    public id?: number,
    public formaPagamento?:string,
  ) {
    super();
  }

  static fromJson(jsonData: any): Venda {
    return Object.assign(new Venda(), jsonData);
  }
}