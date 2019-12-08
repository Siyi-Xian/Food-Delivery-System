import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {FormBuilder} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-deliverylogin',
  templateUrl: './deliverylogin.component.html',
  styleUrls: ['./deliverylogin.component.css']
})
export class DeliveryloginComponent implements OnInit {
  @ViewChild('recaptcha', {static: true}) recaptchaElement: ElementRef;
  deliveryLoginForm;
  forgot_message = ""
  showFile = false;
  deliveryVerifyForm

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService,
    private router: Router,
    private http: HttpClient) {
    this.deliveryLoginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
    this.deliveryVerifyForm = this.formBuilder.group({
      otp: ''
    })
  }
  timesSubmitted = 0

  ngOnInit() {
    this.forgot_message = ""
    this.addRecaptchaScript();
  }
  recover(){
    var data = this.deliveryLoginForm.get('email').value
    data = {
      'email': data
    }
    var url = "/authentication/recover/delivery"
    this.http.post(url, data).subscribe(
      (res)=> this.forgot_message="Password resetted",
      (err) => console.log(err)
    )
    console.log(data)
  }

  onVerify(deliveryData){
    deliveryData['_id'] = this.cookie.get("delivery_id")
    // console.log("verify")
    var jwttoken = this.cookie.get("jwttoken");
    this.http.post('/authentication/verifyotp/delivery', deliveryData).subscribe(data =>{
      if (data['auth']){
        this.router.navigate(['/deliveryprofile'])
      }
      else{
        alert("Invalid OTP")
      }
    })
  }

  onSubmit(userData){
    var r = this.loginService.sendRequest(userData, "/authentication/login/delivery");
    if(this.recaptchaElement == null){
      alert('Enter recaptcha');
      return;
    }
    r.subscribe(data => {
      console.log(data)
      if(data['auth']){
        this.cookie.set("jwttoken", data['token']);
        this.cookie.set("delivery_id", data['_id']);
        this.cookie.set("name", data["name"])
        this.showFile = true
        // this.router.navigate(['/deliveryprofile']);
        //console.log(data[_id])
      }

    })
  }

  addRecaptchaScript(){
    window['grecaptchaCallback'] = () => {
      this.renderReCaptcha();
    }

    (function(d, s, id, obj){
      var js,fjs = d.getElementsByTagName(s)[0];
      if(d.getElementById(id)) { obj.renderReCaptcha(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));

  }

  renderReCaptcha(){
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LdhGcMUAAAAAJ2eG5TNInZtPqRfS2MJE-CVeptA',
      'callback' : (response) => {
        console.log(response);
      }
    });
  }
}
