import { ClienteLancamentosComponent } from './cliente-lancamentos/cliente-lancamentos.component';
import { LancamentoListComponent } from './lancamento-list/lancamento-list.component';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LancamentoListComponent},
  {path: ':idCliente/new', component: LancamentoFormComponent},
  {path: ':idLancamento/edit', component: LancamentoFormComponent},
  {path: ':idCliente', component: ClienteLancamentosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
