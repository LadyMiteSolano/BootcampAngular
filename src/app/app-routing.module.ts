import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './lib/autenticacion/login/login.component';
import { TableComponent } from './lib/ejemplo/table/table.component';
import { NotfoundComponent } from './lib/shared/notfound/notfound.component';
import { ListaproductoComponent } from './lib/ejemplo/listaproducto/listaproducto.component';
import { EditarproductoComponent } from './lib/ejemplo/editarproducto/editarproducto.component';
import { AutenticacionComponent } from './lib/autenticacion/autenticacion/autenticacion.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', 
    loadChildren: () => import('./lib/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },
  {path: 'table', component: TableComponent},
  {path: 'listaproducto', component: ListaproductoComponent},
  {path: 'editarproducto', component: EditarproductoComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
