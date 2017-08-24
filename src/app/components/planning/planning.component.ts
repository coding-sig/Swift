import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor() { }

  mockData: any[] = [
    {
      id: 123,
      priority: `high`,
      owner: `owner 1`,
      ownerPicUrl: ``,
      status: `Done`,
      title: `mock item 1`,
      description: `this is a mock item.`
    }, {
      id: 122,
      priority: `low`,
      owner: `owner 2`,
      ownerPicUrl: ``,
      status: `To Do`,
      title: `mock item 1`,
      description: `this is a mock item.`
    }, {
      id: 121,
      priority: `high`,
      owner: `owner 3`,
      ownerPicUrl: ``,
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
    }
  ];

  backlog: any[] = [
    123,
    122,
    121,
    120
  ];

  quickSearchText: string;

  ngOnInit() {
    this.backlog = this.backlog.map(id => this.getItemById(id)).filter(item => item);
    this.sprints = this.sprints.map(sprint => this.getSprintItems(sprint));
  }

  private getItemById(id: number): any {
    return this.mockData.find( item => item.id === id);
  }

  private getSprintItems(sprint: any): any {
    sprint.items = sprint.items.map(id => this.getItemById(id)).filter(item => item);
    return sprint;
  }

}
