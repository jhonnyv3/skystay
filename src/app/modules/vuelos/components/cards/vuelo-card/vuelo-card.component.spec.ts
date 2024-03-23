import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloCardComponent } from './vuelo-card.component';

describe('VueloCardComponent', () => {
  let component: VueloCardComponent;
  let fixture: ComponentFixture<VueloCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueloCardComponent]
    });
    fixture = TestBed.createComponent(VueloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
