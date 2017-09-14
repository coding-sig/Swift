import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSideNavComponent } from './project-side-nav.component';

describe('ProjectSideNavComponent', () => {
  let component: ProjectSideNavComponent;
  let fixture: ComponentFixture<ProjectSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
