import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent implements OnInit {

  currentStep: number;
  modesModel: any [];

  constructor() { }

  ngOnInit() {
    this.currentStep = 0;
    this.modesModel = [
      {
        iconUrl: `../../../assets/myAvatar.png`,
        mode: `Scrum`,
        description: `Scrum is an agile framework, emphasize on delivering shippings of product
         in a series of fixed-length iterations a.k.a "sprints".
        Each sprint has a specific cadence to deliver a tangible progress over a potential release of the product.`
      }, {
        iconUrl: `../../../assets/myAvatar2.png`,
        mode: `Kanban`,
        description: `Kanban is another popular agile framework. 
        Built on top of requirements of real-time communication, and full transparency of work, all the tasks are
        sorted, and presented on boards to allow team members to view the state of the tasks.`
      }
    ];
  }

  nextStep() {
    if (this.currentStep > 7) {
      return;
    }
    this.currentStep++;
  }

  previousStep() {
    if (this.currentStep === 0) {
      return;
    }
    this.currentStep--;
  }

  done() {
    // todo: save the setting
  }

}
