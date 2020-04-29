import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { ClienteReportComponent } from './cliente-report/cliente-report.component';
import { LancamentosReportComponent } from './lancamentos-report/lancamentos-report.component';
import { VendasReportComponent } from './vendas-report/vendas-report.component';

@NgModule({
  declarations: [ClienteReportComponent, LancamentosReportComponent, VendasReportComponent],
  imports: [
    CommonModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }
