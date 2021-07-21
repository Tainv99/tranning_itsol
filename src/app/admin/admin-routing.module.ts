import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListConnectiveComponent} from './list-connective/list-connective.component';
import {ImportConnectiveComponent} from './import-connective/import-connective.component';
import {UpdateConnectiveComponent} from './update-connective/update-connective.component';
import {TestComponent} from './test/test.component';
const routes: Routes = [
  {path : 'list' , component : ListConnectiveComponent},
  {path : 'import' , component : ImportConnectiveComponent},
  {path : 'update' , component : UpdateConnectiveComponent},
  {path : 'test' , component : TestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
