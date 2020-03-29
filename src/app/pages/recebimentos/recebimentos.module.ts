import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { RecebimentosRoutingModule } from './recebimentos-routing.module';
import { RecebimentosListComponent } from './recebimentos-list/recebimentos-list.component';
import { RecebimentoFormComponent } from './recebimento-form/recebimento-form.component';

@NgModule({
  declarations: [RecebimentosListComponent, RecebimentoFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecebimentosRoutingModule
  ]
})
export class RecebimentosModule { }
