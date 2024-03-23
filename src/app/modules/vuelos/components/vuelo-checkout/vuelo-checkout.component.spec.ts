import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloCheckoutComponent } from './vuelo-checkout.component';

describe('VueloCheckoutComponent', () => {
  let component: VueloCheckoutComponent;
  let fixture: ComponentFixture<VueloCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VueloCheckoutComponent]
    });
    fixture = TestBed.createComponent(VueloCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
