import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlanningService {
    
    constructor() {}

    checkOngoingSprint(sprints) {
        let moreThanOneOngoing = false;

        sprints.forEach(sprint => {
            if (moreThanOneOngoing) {
                sprint.isCollapsed = true;
                sprint.isOngoing = false;

                return;
            }
            if (sprint.isOngoing) {
                sprint.isCollapsed = false;
                moreThanOneOngoing = true;
            }
        });


    }
}