import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs/Rx';
import { MenuItem } from 'primeng/primeng';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { AppThemeService } from '../../services/app-theme.service';
import { PlanningService } from './planning.service';

import { ITEM } from './typings/item.d';
import { SPRINT } from './typings/sprint.d';
import { BACKLOG } from './typings/backlog.d';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  itemTypes: string[] = [
    `bug`,
    `nice to have`,
    `must have`,
    `consult`
  ];

  planningButtonsModel: MenuItem[] = [
    {
      label: `Add Item`,
      icon: `fa-plus`,
      command: this.displayAddItemDialog.bind(this)
    }, {
      label: `End Sprint`,
      icon: `fa-check`,
      command: this.displayConfirmEndSprintDialog
    }, {
      label: `Edit Sprint`,
      icon: `fa-pencil`,
      command: this.displayEditSprintDialog
    }
  ];

  quickSearchText: string;
  appTheme: string;
  backlog: BACKLOG;
  sprints: SPRINT[];
  dialogsStatus: any;
  activeSprintId: number;

  constructor(
    private themeService: AppThemeService,
    private planningService: PlanningService,
    private dragulaService: DragulaService
  ) {
    this.themeService.getTheme().subscribe(theme => this.appTheme = theme);
    this.planningService.getBacklog().subscribe(backlog => this.backlog = backlog);
    this.planningService.getSprints().subscribe(sprints => this.sprints = sprints);
    this.dialogsStatus = {
      addItem: false,
      editSprint: false,
      addSprint: false
    };

    dragulaService.setOptions('sprint-bag', {
      removeOnSpill: true
    });
  }

  ngOnInit() {
    
  
  }

  onCardClicked(item) {
    item.isClicked = true;
  }

  getThemeClassName(): string {
    return this.appTheme;
  }

  getSectionCollapseStatus(isCollapsed: boolean): string {
    return isCollapsed ? 'expand_more' : 'expand_less';
  }

  toggleSectionCollapse(sprint: any) {
    sprint.isCollapsed = !sprint.isCollapsed;
  }

  getSectionMenuButtonModel(): MenuItem[] {
    return this.planningButtonsModel.filter(bModel => bModel.label !== `Add Item`);
  }

  getBacklogButtonModel() : MenuItem {
    return this.planningButtonsModel.find(bModel => bModel.label === `Add Item`);
  }

  displayAddSprintDialog() {
    console.log(`add sprint works!`);
  }

  displayAddItemDialog(sprintId: number) {
    console.log(`add item works!`, sprintId);
    this.activeSprintId = sprintId;
    this.dialogsStatus.addItem = true;
  }

  onAddItemDialogStatusChange(e) {
    this.dialogsStatus.addItem = e.value;
  }

  private displayConfirmEndSprintDialog() {
    console.log(`end sprint works!`);
  }

  private displayEditSprintDialog() {
    console.log(`edit sprint works!`);
  }

  onCardDragStart(e) {
    console.log(e)
  }

}
