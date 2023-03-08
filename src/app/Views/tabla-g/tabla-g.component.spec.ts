import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGComponent } from './tabla-g.component';

describe('TablaGComponent', () => {
  let component: TablaGComponent;
  let fixture: ComponentFixture<TablaGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
