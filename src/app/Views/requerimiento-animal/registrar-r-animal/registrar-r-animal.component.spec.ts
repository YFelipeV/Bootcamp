import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRAnimalComponent } from './registrar-r-animal.component';

describe('RegistrarRAnimalComponent', () => {
  let component: RegistrarRAnimalComponent;
  let fixture: ComponentFixture<RegistrarRAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarRAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarRAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
