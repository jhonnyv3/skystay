import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelHomeComponent } from './hotel-home.component';

describe('HotelHomeComponent', () => {
  let component: HotelHomeComponent;
  let fixture: ComponentFixture<HotelHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelHomeComponent]
    });
    fixture = TestBed.createComponent(HotelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
