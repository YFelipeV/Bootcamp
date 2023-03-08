import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRegistroComponent } from './tab-registro.component';

describe('TabRegistroComponent', () => {
  let component: TabRegistroComponent;
  let fixture: ComponentFixture<TabRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
