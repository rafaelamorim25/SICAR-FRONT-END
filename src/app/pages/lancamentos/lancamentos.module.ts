import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentoListComponent } from './lancamento-list/lancamento-list.component';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { ClienteLancamentosComponent } from './cliente-lancamentos/cliente-lancamentos.component';

@NgModule({
  declarations: [LancamentoListComponent, LancamentoFormComponent, ClienteLancamentosComponent],
  imports: [
    CommonModule,
    LancamentosRoutingModule
  ]
})
export class LancamentosModule { }
