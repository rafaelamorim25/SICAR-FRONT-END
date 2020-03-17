import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Venda } from '../../vendas/shared/venda.model';

export class Cliente extends BaseResourceModel<number> {
  constructor(
    public id?: number,
    public nome?: string,
    public cpf?: string,
    public contato?: string,
    public vendas?: Array<Venda>
  ) {
    super();
  }

  static fromJson(jsonData: any): Cliente {
    return Object.assign(new Cliente(), jsonData);
  }
}
