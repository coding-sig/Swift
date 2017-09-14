import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'project-side-nav',
  templateUrl: './project-side-nav.component.html',
  styleUrls: ['./project-side-nav.component.scss']
})
export class ProjectSideNavComponent implements OnInit {

  @Output() onToggleDisplay= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  hideSideNav() {
    this.onToggleDisplay.emit(false);
  }

}
