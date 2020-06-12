import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddCustomerComponent } from './page-add-customer.component';

describe('PageAddCustomerComponent', () => {
  let component: PageAddCustomerComponent;
  let fixture: ComponentFixture<PageAddCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
