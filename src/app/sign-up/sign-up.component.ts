import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  model: UserComponent = new UserComponent;

  constructor() {}

  onSubmit(){
    console.log(this.model);
  }
}
