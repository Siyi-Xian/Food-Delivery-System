import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-resturantlogin',
  templateUrl: './resturantlogin.component.html',
  styleUrls: ['./resturantlogin.component.css']
})
export class ResturantloginComponent implements OnInit {

  restaurantLoginForm;



  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder) { 
      this.restaurantLoginForm = this.formBuilder.group({
        email: '',
        password: ''
      })
    }
  timesSubmitted = 0
  ngOnInit() {
  }

  onSubmit(userData){
    console.log(this.loginService.sendRequest(userData, "http://localhost:3000/login/restaurant"));
  }

  logRestIn(event){
    event.preventDefault()
    console.log(event)
    this.timesSubmitted += 1
    if (this.timesSubmitted > 1){
      console.log("captcha has been prompted")
    }
  }
}
