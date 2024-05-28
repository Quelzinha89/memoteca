import { NgModule, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { CitacoesFilosoficasComponent } from './componentes/pensamentos/citacoes-filosoficas/citacoes-filosoficas.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';


export const routes: Routes = [
    {
      path: '',
      redirectTo:  'listar-pensamento',
      pathMatch:'full',
    },

    {
      path:'',
      redirectTo: 'pensamento',
      component: PensamentoComponent
    },

    {
      path: 'criar-pensamento',
      component: CriarPensamentoComponent},

    {
      path:'citacoes-filosoficas',
       component: CitacoesFilosoficasComponent },
    {
      path:'listar-pensamento',
      component: ListarPensamentoComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
