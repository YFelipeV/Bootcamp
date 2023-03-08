import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAnimalesComponent } from './gestionar-animales.component';

describe('GestionarAnimalesComponent', () => {
  let component: GestionarAnimalesComponent;
  let fixture: ComponentFixture<GestionarAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarAnimalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
