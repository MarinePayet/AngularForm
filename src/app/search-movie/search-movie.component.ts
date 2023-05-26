import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  searchMovieForm: FormGroup;


  constructor() {
    this.searchMovieForm = new FormGroup({
      userData: new FormGroup({
        login: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
        title: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)])
      }),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(){
    console.log(this.searchMovieForm);
  }

  get password(){
    return this.searchMovieForm.get('password') as FormControl;
  }
  get login(){
    return this.searchMovieForm.get('userData.login') as FormControl;
  }
  get title(){
    return this.searchMovieForm.get('userData.title') as FormControl;
  }
  get email(){
    return this.searchMovieForm.get('email') as FormControl;
  }

}
