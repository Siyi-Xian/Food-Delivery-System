import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {LoginService} from '../login.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  SERVER_URL = "http://localhost:3000/sign_up/user";
  userRegistrationForm;
  
  

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder) { 
      this.userRegistrationForm = this.formBuilder.group({
        name: '',
        email: '',
        password: ''
      })
    }

  ngOnInit() {
    
  }

  onSubmit(userData){

    console.log(userData);
    console.log(this.loginService.sendRequest(userData, this.SERVER_URL));

  }

}
