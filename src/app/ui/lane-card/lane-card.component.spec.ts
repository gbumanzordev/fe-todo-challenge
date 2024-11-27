import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneCardComponent } from './lane-card.component';

describe('LaneCardComponent', () => {
  let component: LaneCardComponent;
  let fixture: ComponentFixture<LaneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaneCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
