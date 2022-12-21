import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialcalloutComponent } from './trialcallout.component';

describe('TrialcalloutComponent', () => {
  let component: TrialcalloutComponent;
  let fixture: ComponentFixture<TrialcalloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialcalloutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialcalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
