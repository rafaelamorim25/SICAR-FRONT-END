import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentosReportComponent } from './lancamentos-report/lancamentos-report.component';
import { ClienteReportComponent } from './cliente-report/cliente-report.component';
import { VendasReportComponent } from './vendas-report/vendas-report.component';

const routes: Routes = [
  {path: 'clientes-report', component:  ClienteReportComponent},
  {path: 'vendas-report', component: VendasReportComponent},
  {path: 'lancamentos-report', component: LancamentosReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
