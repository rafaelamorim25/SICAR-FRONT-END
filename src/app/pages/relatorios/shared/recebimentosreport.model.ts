import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Recebimento } from '../../recebimentos/shared/recebimento.model';

export class RecebimentosReport extends BaseResourceModel<number> {
    constructor(
      public countClientes?: number,
      public countVendas?: number,
      public countRecebimentos?: number,
      public totalRecebimentos?: number,
      public totalVendas?: number,
      public totalRecebimentosPeriodo?: number,
      public totalVendasPeriodo?: number,
      public ticketMedio?: number
    ) {
      super();
    }

    static fromJson(jsonData: any): RecebimentosReport {
      return Object.assign(new RecebimentosReport(), jsonData);
    }
  }

  export class Intervalo extends BaseResourceModel<number> {
    constructor(
      public inicio?: Date,
      public fim?: Date
    ) {
      super();
    }
  }