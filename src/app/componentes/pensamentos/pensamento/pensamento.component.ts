import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  pensamento = {
    conteudo:'I Love Angular',
    autoria: 'Raquel',
    modelo:'modelo3'
  }
}
