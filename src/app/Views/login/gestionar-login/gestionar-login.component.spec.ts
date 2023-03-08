import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarLoginComponent } from './gestionar-login.component';

describe('GestionarLoginComponent', () => {
  let component: GestionarLoginComponent;
  let fixture: ComponentFixture<GestionarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
