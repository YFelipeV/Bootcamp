import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRAnimalComponent } from './detalles-r-animal.component';

describe('DetallesRAnimalComponent', () => {
  let component: DetallesRAnimalComponent;
  let fixture: ComponentFixture<DetallesRAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesRAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesRAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
