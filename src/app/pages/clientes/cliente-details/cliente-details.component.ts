import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent extends BaseResourceFormComponent<Cliente> {

  constructor(
      protected clienteService: ClienteService,
      protected injector: Injector
    ) {
      super(injector, new Cliente(), clienteService, Cliente.fromJson);
    }

    protected buildResourceForm() {
      this.resourceForm = this.formBuilder.group({
        id: [null],
        nome: [null, [Validators.required, Validators.minLength(2)]],
        cpf: [null, [Validators.required]],
        contato: [null, [Validators.required]]
      });
    }
  }
