import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento = {
    id:'1',
    conteudo:'Aprendendo Angular',
    autoria:'Dev',
    modelo: 'modelo1'
  }



  constructor (){}

  ngOnInit(): void{


  }



  criarPensamento(){

  alert("Novo Pensamento criado")
}

excluirPensamento(){
  alert("Pensamento Excluido")
}

}


