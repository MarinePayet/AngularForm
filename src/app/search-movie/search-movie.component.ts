import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})


export class SearchMovieComponent {
  // currentYear: number = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder) {
    this.identifierOrTitleRequired = false;
  }

  searchMovieForm: FormGroup = this.formBuilder.group({

    userData: this.formBuilder.group({
      login: [null, [Validators.minLength(3), Validators.maxLength(15)]],
      title: [null, [Validators.minLength(3), Validators.maxLength(15)]],
    }, { validators: this.isRequiredValidator }),
      email: [null,[Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      type: ['serie'],
      fiche:['short'],
      year:[null,[Validators.required]]
      // year:[null,[Validators.required, Validators.min(1900), Validators.max(this.currentYear)]]
    });

    onSubmit() {
      console.log(this.searchMovieForm);
      this.isRequiredValidator(this.searchMovieForm);
    }

    identifierOrTitleRequired: boolean = false;

  isRequiredValidator(form: FormGroup) {
  const userData = form.get('userData');
  const login = userData?.get('login');
  const title = userData?.get('title');

  if ((!login?.value || login.value.trim() === '') && (!title?.value || title.value.trim() === '')) {
    this.identifierOrTitleRequired = true;
  } else {
    this.identifierOrTitleRequired = false;
  }
}

    get year(){
      return this.searchMovieForm.get('year') as FormControl;
    }

    get type(){
      return this.searchMovieForm.get('type') as FormControl;
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
