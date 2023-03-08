import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarRAnimalComponent } from './gestionar-r-animal.component';

describe('GestionarRAnimalComponent', () => {
  let component: GestionarRAnimalComponent;
  let fixture: ComponentFixture<GestionarRAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarRAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarRAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
