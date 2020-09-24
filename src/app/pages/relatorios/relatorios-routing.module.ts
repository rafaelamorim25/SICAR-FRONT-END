import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentosReportComponent } from './lancamentos-report/lancamentos-report.component';

const routes: Routes = [
  {path: 'report', component: LancamentosReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
