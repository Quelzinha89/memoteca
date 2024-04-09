import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitacoesFilosoficasComponent } from './componentes/pensamentos/citacoes-filosoficas/citacoes-filosoficas.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';

export const routes: Routes = [
    { path:'', component: CriarPensamentoComponent},
    { path:'citacoes-filosoficas', component: CitacoesFilosoficasComponent },

  // { path: '', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
