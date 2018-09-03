import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export interface Training {
  value: string;
  viewValue: string;
}

export interface TrainingGroup {
  disabled?: boolean;
  name: string;
  training: Training[];
}

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();

  trainingGroups: TrainingGroup[] = [
    {
      name: 'Upper Body',
      training: [
        {value: 'benchpress', viewValue: 'Bench Press'},
        {value: 'pullup', viewValue: 'Pull Up'},
        {value: 'shoulderpress', viewValue: 'Shoulder Press'}
      ]
    },
    {
      name: 'Lower Body',
      training: [
        {value: 'squat', viewValue: 'Squat'},
        {value: 'deadlift', viewValue: 'Deadlift'},
        {value: 'lunge', viewValue: 'Lunge'}
      ]
    },
    {
      name: 'Explosive',
      disabled: true,
      training: [
        {value: 'snatch', viewValue: 'Snatch'},
        {value: 'clean', viewValue: 'Clean'},
        {value: 'Jerk', viewValue: 'Jerk'}
      ]
    },
    {
      name: 'GPP',
      training: [
        {value: 'sledwalk', viewValue: 'Sled Walk'},
        {value: 'farmerwalk', viewValue: 'Farmer Walk'},
      ]
    },
    // {
    //   name: 'Core',
    //   disabled: true,
    //   training: [
    //     {value: 'charmander-6', viewValue: 'Charmander'},
    //     {value: 'vulpix-7', viewValue: 'Vulpix'},
    //     {value: 'flareon-8', viewValue: 'Flareon'}
    //   ]
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
