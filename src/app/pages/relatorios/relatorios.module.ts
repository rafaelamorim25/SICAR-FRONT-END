import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { LancamentosReportComponent } from './lancamentos-report/lancamentos-report.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LancamentosReportComponent],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    ReactiveFormsModule
  ]
})
export class RelatoriosModule { }
