import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtBsComponent } from './debt-bs.component';

describe('DebtBsComponent', () => {
  let component: DebtBsComponent;
  let fixture: ComponentFixture<DebtBsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtBsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
