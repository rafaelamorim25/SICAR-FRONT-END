import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecebimentosListComponent} from './recebimentos-list/recebimentos-list.component';
import { RecebimentoFormComponent } from './recebimento-form/recebimento-form.component';

const routes: Routes = [
  {path: '', component: RecebimentosListComponent},
  {path: ':id/new', component: RecebimentoFormComponent},
  {path: ':id/edit', component: RecebimentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecebimentosRoutingModule { }
