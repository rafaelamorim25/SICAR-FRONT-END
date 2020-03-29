import { Component, Injector } from '@angular/core';
import { Recebimento } from '../shared/recebimento.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { RecebimentoService } from './../shared/recebimento.service';
import { Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Cliente } from '../../clientes/shared/cliente.model';
import { ClienteService } from '../../clientes/shared/cliente.service';

@Component({
  selector: 'app-recebimento-form',
  templateUrl: './recebimento-form.component.html',
  styleUrls: ['./recebimento-form.component.css']
})
export class RecebimentoFormComponent extends BaseResourceFormComponent<Recebimento>{

  constructor(
    protected recebimentoService: RecebimentoService,
    protected injector: Injector
  ) {
    super(injector, new Recebimento(), recebimentoService, Recebimento.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      valor: [null],
      data: [null],
      clienteId: [null]
    });
  }

  loadResource() {
    console.log('CurrentAction' + this.currentAction);
    if (this.currentAction === 'edit') {
      console.log('Mandou carregar para editar');
      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(+params.get('id')))
      )
      .subscribe(
        (resource) => {
          this.resource = resource;
          this.resource.clienteId = this.resource.cliente.id
          this.resourceForm.patchValue(resource) // binds loaded resource data to resourceForm
          console.log('Oque foi carregado do servidor ->>>');
          console.log(resource);
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      )
    }
    if (this.currentAction === 'new') {
      console.log('Mandou carregar para criar');
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
          console.log('Oque foi carregado do servidor ->>>');
          console.log(resource);
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      )
    }
  }
}
