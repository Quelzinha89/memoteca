import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-citacoes-filosoficas',
  standalone: true,
  imports: [ MatButtonModule, MatCardModule, MatIconModule,FormsModule],
  templateUrl: './citacoes-filosoficas.component.html',
  styleUrl: './citacoes-filosoficas.component.css'
})
export class CitacoesFilosoficasComponent {

  public nome='Raquel';
  public sobrenome ='Correa';
  public titulo = 'Citaçãoes-Pensamentos';
  public getNomeCompleto(){
    return this.nome +''+this.sobrenome;
  }

  constructor (){}

  ngOnInit(): void{


  }

}
