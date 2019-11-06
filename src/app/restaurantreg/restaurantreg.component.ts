import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { config } from 'rxjs';


@Component({
  selector: 'app-restaurantreg',
  templateUrl: './restaurantreg.component.html',
  styleUrls: ['./restaurantreg.component.css']
})
export class RestaurantregComponent implements OnInit {
  SERVER_URL = "/authentication/sign_up/restaurant";
  restaurantRegistrationForm;


  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.restaurantRegistrationForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      confirmpass: '',
      restaurant_name: ''
    })
  } 

  ngOnInit() {
  }


  newRest(password, confirmpass){
    //event.preventDefault()
    
    if(password == confirmpass){
      return true
    }
    else{
      return false
    }
  }

  onSubmit(userData){

      if(this.newRest(userData.password, userData.confirmpass)){
        var r = this.loginService.sendRequest(userData, this.SERVER_URL);
        r.subscribe(data => {
          this.router.navigate(['/resturantlogin']);
        })
      }
      else{
        alert("Passwords do not match");
      }
  }

}
