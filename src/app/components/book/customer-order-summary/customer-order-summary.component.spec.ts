import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderSummaryComponent } from './customer-order-summary.component';

describe('CustomerOrderSummaryComponent', () => {
  let component: CustomerOrderSummaryComponent;
  let fixture: ComponentFixture<CustomerOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
