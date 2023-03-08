import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMunicipiosComponent } from './registrar-municipios.component';

describe('RegistrarMunicipiosComponent', () => {
  let component: RegistrarMunicipiosComponent;
  let fixture: ComponentFixture<RegistrarMunicipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMunicipiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
