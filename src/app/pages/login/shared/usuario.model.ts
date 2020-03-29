import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Usuario extends BaseResourceModel<number> {
  constructor(
    public username?: string,
    public senha?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): Usuario {
    return Object.assign(new Usuario(), jsonData);
  }
}