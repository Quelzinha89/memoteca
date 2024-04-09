import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitacoesFilosoficasComponent } from './citacoes-filosoficas.component';

describe('CitacoesFilosoficasComponent', () => {
  let component: CitacoesFilosoficasComponent;
  let fixture: ComponentFixture<CitacoesFilosoficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitacoesFilosoficasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitacoesFilosoficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
