import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-deliveryreg',
  templateUrl: './deliveryreg.component.html',
  styleUrls: ['./deliveryreg.component.css']
})
export class DeliveryregComponent implements OnInit {
  SERVER_URL = "/authentication/sign_up/delivery";
  deliveryRegistrationForm;



  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.deliveryRegistrationForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      confirmpass: ''
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


    if(this.newRest(userData.password, userData.confirmpass) && userData.password != null){
      var r = this.loginService.sendRequest(userData, this.SERVER_URL);
      r.subscribe(data => {
        this.router.navigate(['/login']);
      })
    }
    else{
      alert("Passwords do not match");
    }
  }

}
