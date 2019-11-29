import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

import { DataTablesModule } from 'angular-datatables';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';

@NgModule({
  declarations: [ClienteListComponent, ClienteFormComponent, ClienteDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClientesRoutingModule,
    DataTablesModule
  ]
})
export class ClientesModule { }
