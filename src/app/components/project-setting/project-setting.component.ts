import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent implements OnInit {

  currentStep: number;
  modesModel: any [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.currentStep = 0;
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
    this.router.navigate(['dashboard'], {});
  }

}
