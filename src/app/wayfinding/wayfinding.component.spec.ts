import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayfindingComponent } from './wayfinding.component';

describe('WayfindingComponent', () => {
  let component: WayfindingComponent;
  let fixture: ComponentFixture<WayfindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayfindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WayfindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
