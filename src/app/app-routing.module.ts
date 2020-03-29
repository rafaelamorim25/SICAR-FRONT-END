import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'clientes', loadChildren: 'src/app/pages/clientes/clientes.module#ClientesModule'},
  {path: 'relatorios', loadChildren: 'src/app/pages/relatorios/relatorios.module#RelatoriosModule'},
  {path: 'recebimentos', loadChildren: 'src/app/pages/recebimentos/recebimentos.module#RecebimentosModule'},
  {path: 'vendas', loadChildren: 'src/app/pages/vendas/vendas.module#VendasModule'},
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
