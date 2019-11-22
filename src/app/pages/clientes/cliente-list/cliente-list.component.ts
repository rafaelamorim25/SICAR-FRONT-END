import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

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

  search() {
    const key: string = this.searchForm.get('keyword').value;

    if (key === '') {
      this.refresh();
    } else {
      this.resources = this.resources.filter(element =>
        element.nome.includes(key)
      );
    }
  }
}
