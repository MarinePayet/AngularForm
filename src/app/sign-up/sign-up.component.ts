import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  model: UserComponent = new UserComponent;

  constructor() {}

  onSubmit(form: NgForm){
    // console.log(this.model);
    if(form.valid)
    console.log("submit");
  }
}
