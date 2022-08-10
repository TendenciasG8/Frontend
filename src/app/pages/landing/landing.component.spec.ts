import { ComponentFixture, TestBed } from '@angular/core/testing';

import { landingComponent } from './landing.component';

describe('landingComponent', () => {
  let component: landingComponent;
  let fixture: ComponentFixture<landingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ landingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(landingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
