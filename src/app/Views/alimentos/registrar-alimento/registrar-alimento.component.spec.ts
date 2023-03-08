import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAlimentoComponent } from './registrar-alimento.component';

describe('RegistrarAlimentoComponent', () => {
  let component: RegistrarAlimentoComponent;
  let fixture: ComponentFixture<RegistrarAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAlimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
