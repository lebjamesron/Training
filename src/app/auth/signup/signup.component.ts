import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate;
  constructor() { }
  ngOnInit() {
    this.maxDate = new Date();
    console.log('this.maxDate.getFullYear(): ', this.maxDate.getFullYear());
    console.log('this.maxDate: ', this.maxDate);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log('submit: ', form);
  }

}
