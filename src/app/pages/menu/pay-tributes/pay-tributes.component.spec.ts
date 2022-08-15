import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTributesComponent } from './pay-tributes.component';

describe('PayTributesComponent', () => {
  let component: PayTributesComponent;
  let fixture: ComponentFixture<PayTributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayTributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayTributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
