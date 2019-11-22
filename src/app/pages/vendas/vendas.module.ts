import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { VendaFormComponent } from './venda-form/venda-form.component';
import { VendaListComponent } from './venda-list/venda-list.component';
import { VendaClienteFormComponent } from './venda-cliente-form/venda-cliente-form.component';

@NgModule({
  declarations: [VendaFormComponent, VendaListComponent, VendaClienteFormComponent],
  imports: [
    CommonModule,
    VendasRoutingModule
  ]
})
export class VendasModule { }
