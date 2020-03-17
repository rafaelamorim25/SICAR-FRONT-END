import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecebimentosListComponent} from './recebimentos-list/recebimentos-list.component';

const routes: Routes = [
  {path: '', component: RecebimentosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecebimentosRoutingModule { }
