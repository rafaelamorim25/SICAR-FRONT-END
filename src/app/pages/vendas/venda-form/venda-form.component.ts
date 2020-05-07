import { Component, Injector } from '@angular/core';
import { Venda, FormaPagamento } from '../shared/venda.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { VendaService } from './../shared/venda.service';
import { Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Cliente } from '../../clientes/shared/cliente.model';
import { ClienteService } from '../../clientes/shared/cliente.service';

import toastr from 'toastr';

@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.css']
})
export class VendaFormComponent extends BaseResourceFormComponent<Venda>{

  constructor(
    protected vendaService: VendaService,
    protected injector: Injector
  ) {
    super(injector, new Venda(), vendaService, Venda.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      valor: [null],
      data: [null],
      clienteId: [null],
      formaPagamentoId: [null]
    });
  }

  loadResource() {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(+params.get('id')))
      )
      .subscribe(
        (resource) => {
          this.resource = resource;
          this.resource.formaPagamentoId = this.resource.formaPagamento.id;
          this.resource.clienteId = this.resource.cliente.id;
          this.resourceForm.patchValue(resource) // binds loaded resource data to resourceForm
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      )
    }
    if (this.currentAction === 'new') {
      let clienteService: ClienteService;

      clienteService = new ClienteService(this.injector);

      this.route.paramMap.pipe(
        switchMap(params => clienteService.getById(+params.get('id')))
      )
      .subscribe(
        (resource) => {
          this.resource.cliente = resource;
          this.resource.clienteId = this.resource.cliente.id;
          this.resourceForm.patchValue(this.resource) // binds loaded resource data to resourceForm
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      )
    }
  }
}
