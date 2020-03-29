import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Venda } from '../../vendas/shared/venda.model';
import { Recebimento } from '../../recebimentos/shared/recebimento.model';

export class Cliente extends BaseResourceModel<number> {
  constructor(
    public id?: number,
    public nome?: string,
    public cpf?: string,
    public contato?: string,
    public vendas?: Array<Venda>,
    public recebimentos?: Array<Recebimento>
  ) {
    super();
  }

  static fromJson(jsonData: any): Cliente {
    return Object.assign(new Cliente(), jsonData);
  }
}
