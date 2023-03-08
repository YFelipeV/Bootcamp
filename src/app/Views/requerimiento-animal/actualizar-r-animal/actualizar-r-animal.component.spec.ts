import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarRAnimalComponent } from './actualizar-r-animal.component';

describe('ActualizarRAnimalComponent', () => {
  let component: ActualizarRAnimalComponent;
  let fixture: ComponentFixture<ActualizarRAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarRAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarRAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
