import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { VendasRoutingModule } from './vendas-routing.module';
import { VendaFormComponent } from './venda-form/venda-form.component';
import { VendaListComponent } from './venda-list/venda-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VendaFormComponent, VendaListComponent],
  imports: [
    CommonModule,
    SharedModule,
    VendasRoutingModule,
    ReactiveFormsModule
  ]
})
export class VendasModule { }
