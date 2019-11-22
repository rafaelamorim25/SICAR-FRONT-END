import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'clientes', loadChildren: 'src/app/pages/clientes/clientes.module#ClientesModule'},
  {path: 'lancamentos', loadChildren: 'src/app/pages/lancamentos/lancamentos.module#LancamentosModule'},
  {path: 'relatorios', loadChildren: 'src/app/pages/relatorios/relatorios.module#RelatoriosModule'},
  {path: 'vendas', loadChildren: 'src/app/pages/vendas/vendas.module#VendasModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
