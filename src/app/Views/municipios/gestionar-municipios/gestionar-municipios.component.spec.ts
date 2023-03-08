import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarMunicipiosComponent } from './gestionar-municipios.component';

describe('GestionarMunicipiosComponent', () => {
  let component: GestionarMunicipiosComponent;
  let fixture: ComponentFixture<GestionarMunicipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarMunicipiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
