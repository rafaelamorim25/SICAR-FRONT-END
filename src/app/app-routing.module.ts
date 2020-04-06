import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, AuthGuardReverse } from './core/auth.guard';

const routes: Routes = [
  {path: 'clientes', loadChildren: 'src/app/pages/clientes/clientes.module#ClientesModule', canActivate: [AuthGuard]},
  {path: 'relatorios', loadChildren: 'src/app/pages/relatorios/relatorios.module#RelatoriosModule', canActivate: [AuthGuard]},
  {path: 'recebimentos', loadChildren: 'src/app/pages/recebimentos/recebimentos.module#RecebimentosModule', canActivate: [AuthGuard]},
  {path: 'vendas', loadChildren: 'src/app/pages/vendas/vendas.module#VendasModule', canActivate: [AuthGuard]},
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule', canActivate: [AuthGuardReverse]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
