import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLaneComponent } from './dashboard-lane.component';

describe('DashboardLaneComponent', () => {
  let component: DashboardLaneComponent;
  let fixture: ComponentFixture<DashboardLaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
