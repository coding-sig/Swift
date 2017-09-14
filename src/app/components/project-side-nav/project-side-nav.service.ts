import { Injectable } from '@angular/core';
import { PROJECT } from './typings/project.d';

@Injectable()
export class ProjectSideNavService {
    mockData: PROJECT[] = [
        {
            id: 1234,
            title: 'Project Boring',
            sprintIds: [
                111,
                2233,
                454
            ],
            admins: [
                'Mr. Awesome'
            ],
            members: [
                'Hardwording Human'
            ]
        }

    ];
}