import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { VendasRoutingModule } from './vendas-routing.module';
import { VendaFormComponent } from './venda-form/venda-form.component';
import { VendaListComponent } from './venda-list/venda-list.component';

@NgModule({
  declarations: [VendaFormComponent, VendaListComponent],
  imports: [
    CommonModule,
    SharedModule,
    VendasRoutingModule
  ]
})
export class VendasModule { }
