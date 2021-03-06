import { Component, Injector } from '@angular/core';
import { Venda } from '../shared/venda.model';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';
import {VendaService} from '../shared/venda.service';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.css']
})
export class VendaListComponent extends BaseResourceListComponent<Venda> {

  constructor(
    private vendaService: VendaService,
    protected injector: Injector
  ) {
    super(injector, vendaService);
  }

  deleteResource(resource: Venda) {
    const mustDelete = confirm(`
      Deseja realmente excluir este cliente?
      Data: ${resource.data}
      Valor: ${resource.valor}
      Cliente: ${resource.cliente.nome}
      `);

    if (mustDelete) {
      this.vendaService
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
