import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { Alert } from 'selenium-webdriver';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent extends BaseResourceListComponent<Cliente> {

  constructor(
    private clienteService: ClienteService,
    protected injector: Injector
  ) {
    super(injector, clienteService);
  }

  deleteResource(resource: Cliente) {
    const mustDelete = confirm(`
      Deseja realmente excluir este cliente?
      Nome: ${resource.nome}
      CPF: ${resource.cpf}
      Contato: ${resource.contato}
      `);

    if (mustDelete) {
      this.clienteService
        .delete(resource.id)
        .subscribe(
          () =>
            (this.refresh()),
          () => alert('Erro ao tentar excluir!')
        );
    }
  }

  search() {
    const key: string = this.searchForm.get('keyword').value;

    if (key === '') {
      this.refresh();
    } else {
      this.resources = this.resources.filter(element =>
        element.nome.includes(key) || element.cpf.includes(key) || element.contato.includes(key)
      );
    }
  }

  maskCpf(cpf: string): string {
    return cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9, 11);
  }

  maskNumber(num: string): string {
    return '(' + num.substring(0, 2) + ') ' + num.substring(2, 7) + '-' + num.substring(7, 11);
  }
}
