import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningCardComponent } from './planning-card.component';

describe('PlanningCardComponent', () => {
  let component: PlanningCardComponent;
  let fixture: ComponentFixture<PlanningCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
