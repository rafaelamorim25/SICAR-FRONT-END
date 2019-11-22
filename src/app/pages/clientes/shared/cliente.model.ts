import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Cliente extends BaseResourceModel<number> {
  constructor(
    public id?: number,
    public nome?: string,
    public cpf?: number,
    public contato?: number
  ) {
    super();
  }

  static fromJson(jsonData: any): Cliente {
    return Object.assign(new Cliente(), jsonData);
  }
}
