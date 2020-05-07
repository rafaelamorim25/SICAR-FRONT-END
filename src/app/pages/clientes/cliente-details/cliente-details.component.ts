import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { Validators } from '@angular/forms';
import { VendaService } from '../../vendas/shared/venda.service';
import { RecebimentoService } from '../../recebimentos/shared/recebimento.service';
import { Venda } from '../../vendas/shared/venda.model';
import { Recebimento } from '../../recebimentos/shared/recebimento.model';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent extends BaseResourceFormComponent<Cliente> {

  constructor(
      protected clienteService: ClienteService,
      protected injector: Injector,
      private vendaService: VendaService,
      private recebimentoService: RecebimentoService
    ) {
      super(injector, new Cliente(), clienteService, Cliente.fromJson);
    }

    protected buildResourceForm() {
      this.resourceForm = this.formBuilder.group({
        id: [null],
        nome: [{value: null, disabled: true}, [Validators.required, Validators.minLength(2)]],
        cpf: [{value: null, disabled: true}, [Validators.required]],
        contato: [{value: null, disabled: true}, [Validators.required]],
        saldo: [{value: null, disabled: true}, [Validators.required]]
      });
    }

    maskCpf(cpf: string): string {
      return cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9, 11);
    }
  
    maskNumber(num: string): string {
      return '(' + num.substring(0, 2) + ') ' + num.substring(2, 7) + '-' + num.substring(7, 11);
    }

    deleteVenda(venda: Venda) {
      const mustDelete = confirm(`
        Deseja realmente excluir esta venda?
        Data: ${venda.data}
        Valor: ${venda.valor}
        `);
  
      if (mustDelete) {
        this.vendaService
          .delete(venda.id)
          .subscribe(
            () =>
              this.router.navigate(['/vendas']),
            () => alert('Erro ao tentar excluir!')
          );
      }
    }

    deleteRecebimento(recebimento: Recebimento) {
      const mustDelete = confirm(`
        Deseja realmente excluir este recebimento?
        Data: ${recebimento.data}
        Valor: ${recebimento.valor}
        `);
  
      if (mustDelete) {
        this.recebimentoService
          .delete(recebimento.id)
          .subscribe(
            () =>
              this.router.navigate(['']),
            () => alert('Erro ao tentar excluir!')
          );
      }
    }

  }
