import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs/Rx';

import { ITEM } from './typings/Item';
import { SPRINT } from './typings/Sprint';
import { BACKLOG } from './typings/Backlog';

@Injectable()
export class PlanningService {

    // mock data 
    mockData: ITEM[] = [
        {
            id: 123,
            priority: `high`,
            owner: `owner 1`,
            ownerPicUrl: `../../../assets/user-profile/user-profile-spiderman.png`,
            status: `Done`,
            type: `nice to have`,
            storySize: 4,
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
            title: `mock item 1, veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryvery long`,
            description: `this is a mock item.`
        }, {
            id: 121,
            priority: `high`,
            owner: `owner 3`,
            ownerPicUrl: `../../../assets/user-profile/batman-user-profile.png`,
            type: `must have`,
            storySize: 4,
            status: `In Progress`,
            title: `mock item 1`,
            description: `this is a mock item.`
        }
    ];

    sprintsMock: SPRINT[] = [
        {
            id: 333,
            name: `sprint 1`,
            cadence: 2,
            progress: 80.1,
            maxStorySize: 30,
            startDate: `2017/08/25`,
            endDate: `2017/09/08`,
            items: [
                123,
                122,
                121,
                120
            ],
            isOnGoing: true,
            isCollapsed: false
        }, {
            id: 334,
            name: `sprint 2`,
            cadence: 2,
            progress: 80.1,
            maxStorySize: 30,
            startDate: `2017/08/25`,
            endDate: `2017/09/08`,
            items: [
                123,
                122,
                121,
                120
            ],
            isOnGoing: false,
            isCollapsed: false
        }
    ];

    backlogMock: BACKLOG = {
        name: `backlog`,
        maxItems: 40,
        isCollapsed: false,
        items: [
            123,
            122,
            121,
            120
        ]
    };
    //mock data end

    // private _items: BehaviorSubject<ITEM[]> = new BehaviorSubject([]);
    // public readonly items: Observable<ITEM[]> = this._items.asObservable();

    private _sprints: BehaviorSubject<SPRINT[]> = new BehaviorSubject([]);
    public readonly sprints: Observable<SPRINT[]> = this._sprints.asObservable();

    private _backlog: BehaviorSubject<any> = new BehaviorSubject({});
    public readonly backlog: Observable<BACKLOG> = this._backlog.asObservable();

    constructor() {
        // todo: apifacade to call get items, and sprints data
        this.initiateLoadSprints();
    }

    getSprints(): Observable<SPRINT[]> {
        return this.sprints;
    }

    getBacklog(): Observable<BACKLOG> {
        return this.backlog;
    }

    addNewItem(newItem: ITEM, sprintId: number) {
        // todo: apifacade to insert new item


    }

    private initiateLoadSprints() {
        // todo: load all related items, then filter according to sprints, leftover items in backlog
        this.sprintsMock.forEach(sMock => this.getSprintItems(sMock));
        this.checkOnGoingSprint(this.sprintsMock);
        this._sprints.next(this.sprintsMock);

        this.backlogMock.items = this.backlogMock.items.map(id => this.getBacklogItemById(id)).filter(item => item);
        this._backlog.next(this.backlogMock);
    }

    private getItemById(id: number): ITEM {
        return this.mockData.find(item => item.id === id);
    }

    private getSprintItems(sprint: SPRINT): SPRINT {
        sprint.items = sprint.items.map(id => this.getItemById(id)).filter(item => item);
        return sprint;
    }

    private getBacklogItemById(id: number): any {
        const item = this.mockData.find(item => item.id === id);
        return item ? {
          title: item.title,
          priority: item.priority,
          type: item.type
        } : '';
    }

    private checkOnGoingSprint(sprints) {
        let moreThanOneOnGoing = false;
        sprints.forEach(sprint => {
            if (moreThanOneOnGoing) {
                sprint.isCollapsed = true;
                sprint.isOnGoing = false;

                return;
            }
            if (sprint.isOnGoing) {
                sprint.isCollapsed = false;
                moreThanOneOnGoing = true;
            }
        });
    }
}