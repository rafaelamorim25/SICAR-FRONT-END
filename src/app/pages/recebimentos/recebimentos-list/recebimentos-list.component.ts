import { Component, Injector } from '@angular/core';
import { Recebimento } from '../shared/recebimento.model';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';
import {RecebimentoService} from '../shared/recebimento.service';

@Component({
  selector: 'app-recebimentos-list',
  templateUrl: './recebimentos-list.component.html',
  styleUrls: ['./recebimentos-list.component.css']
})
export class RecebimentosListComponent extends BaseResourceListComponent<Recebimento> {

  constructor(
    private recebimentoService: RecebimentoService,
    protected injector: Injector
  ) {
    super(injector, recebimentoService);
  }

  deleteResource(resource: Recebimento) {
    const mustDelete = confirm(`
      Deseja realmente excluir este cliente?
      Data: ${resource.data}
      Valor: ${resource.valor}
      Cliente: ${resource.cliente.nome}
      `);

    if (mustDelete) {
      this.recebimentoService
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
        element.cliente.nome.includes(key)
      );
    }
  }
}
