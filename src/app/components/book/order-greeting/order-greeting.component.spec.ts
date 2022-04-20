import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGreetingComponent } from './order-greeting.component';

describe('OrderGreetingComponent', () => {
  let component: OrderGreetingComponent;
  let fixture: ComponentFixture<OrderGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderGreetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
