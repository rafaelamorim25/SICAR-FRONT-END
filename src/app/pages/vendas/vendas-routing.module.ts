import { VendaClienteFormComponent } from './venda-cliente-form/venda-cliente-form.component';
import { VendaListComponent } from './venda-list/venda-list.component';
import { VendaFormComponent } from './venda-form/venda-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: VendaListComponent},
  {path: 'new', component: VendaFormComponent},
  {path: ':id/new', component: VendaClienteFormComponent},
  {path: ':id/edit', component: VendaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
