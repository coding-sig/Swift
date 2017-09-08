import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs/Rx';

import { AppThemeService } from '../../services/app-theme.service';
import { PlanningService } from './planning.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  mockData: any[] = [
    {
      id: 123,
      priority: `high`,
      owner: `owner 1`,
      ownerPicUrl: `../../../assets/user-profile/user-profile-spiderman.png`,
      status: `Done`,
      type: `nice to have`,
      storySize: 4,
      progress: 0.8,
      title: `mock item 1, veryveryveryveryveryvery long`,
      description: `this is a mock item.`
    }, {
      id: 122,
      priority: `low`,
      owner: `owner 2`,
      ownerPicUrl: `../../../assets/user-profile/user-profile-cap.png`,
      status: `To Do`,
      type: `bug`,
      storySize: 1,
      progress: 0.1,
      title: `mock item 1, veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryvery long`,
      description: `this is a mock item.`
    }, {
      id: 121,
      priority: `high`,
      owner: `owner 3`,
      ownerPicUrl: `../../../assets/user-profile/batman-user-profile.png`,
      type: `must have`,
      storySize: 4,
      progress: 0.3,
      status: `In Progress`,
      title: `mock item 1`,
      description: `this is a mock item.`
    }
  ]

  sprints: any[] = [
    {
      id: 333,
      name: `sprint 1`,
      cadence: 2,
      progress: 80.1,
      startDate: `2017/08/25`,
      endDate: `2017/09/08`,
      items: [
        123,
        122,
        121,
        120
      ],
      isOngoing: true,
      isCollapsed: false
    }, {
      id: 334,
      name: `sprint 2`,
      cadence: 2,
      progress: 80.1,
      startDate: `2017/08/25`,
      endDate: `2017/09/08`,
      items: [
        123,
        122,
        121,
        120
      ],
      isOngoing: false,
      isCollapsed: false
    }
  ];

  backlog: any[] = [
    123,
    122,
    121,
    120
  ];

  itemTypes: string[] = [
    `bug`,
    `nice to have`,
    `must have`,
    `consult`
  ];

  quickSearchText: string;
  appTheme: string;

  constructor(
    private themeService: AppThemeService,
    private planningService: PlanningService
  ) { 
    const themeSubscription = this.themeService.getTheme();
    themeSubscription.subscribe(theme => this.appTheme = theme);
  }

  ngOnInit() {
    this.backlog = this.backlog.map(id => this.getBacklogItemById(id)).filter(item => item);
    this.sprints = this.sprints.map(sprint => this.getSprintItems(sprint));
    this.planningService.checkOngoingSprint(this.sprints);
  }

  onCardClicked (item) {
    item.isClicked = true;
  }

  getThemeClassName(): string {
    return this.appTheme;
  }

  getSprintCollapseStatus(isCollapsed: boolean): string {
    return isCollapsed ? 'expand_more' : 'expand_less';
  }

  toggleSprintCollapse(sprint: any) {
    sprint.isCollapsed = !sprint.isCollapsed;
  }

  onCardDragStart(e) {
    console.log(e)
  }

  private getItemById(id: number): any {
    return this.mockData.find( item => item.id === id);
  }

  private getBacklogItemById(id: number): any {
    const item = this.mockData.find( item => item.id === id);
    return item ? {
      title: item.title,
      priority: item.priority,
      type: item.type
    } : '';
  }

  private getSprintItems(sprint: any): any {
    sprint.items = sprint.items.map(id => this.getItemById(id)).filter(item => item);
    return sprint;
  }

}
