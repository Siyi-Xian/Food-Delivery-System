import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resturantlogin',
  templateUrl: './resturantlogin.component.html',
  styleUrls: ['./resturantlogin.component.css']
})
export class ResturantloginComponent implements OnInit {
  @ViewChild('recaptcha', {static: true}) recaptchaElement: ElementRef;
  restaurantLoginForm;
  forgot_message = ""
  showFile = false;
  restaurantVerifyForm


  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService,
    private router: Router,
    private http: HttpClient) { 
      this.restaurantLoginForm = this.formBuilder.group({
        email: '',
        password: ''
      })
      this.restaurantVerifyForm = this.formBuilder.group({
        otp: ''
      })
    }
  timesSubmitted = 0
  ngOnInit() {
    this.forgot_message = ""
    this.addRecaptchaScript();
  }
  recover(){
    var data = this.restaurantLoginForm.get('email').value
    data = {
      'email': data
    }
    var url = "/authentication/recover/restaurant"
    this.http.post(url, data).subscribe(
      (res)=> this.forgot_message="Password resetted",
      (err) => console.log(err)
    )
    console.log(data)
  }


  onVerify(restaurantData){
    restaurantData['_id'] = this.cookie.get("restaurant_id")
    // console.log("verify")
    var jwttoken = this.cookie.get("jwttoken");
    this.http.post('/authentication/verifyotp/restaurant', restaurantData).subscribe(data =>{
      if (data['auth']){
        this.router.navigate(['/restaurantviewdetails'])
      }
      else{
        alert("Invalid OTP")
      }
    })
  }

  onSubmit(userData){
    var r = this.loginService.sendRequest(userData, "/authentication/login/restaurant");
    if(this.recaptchaElement == null){
      alert('Enter recaptcha');
      return;
    }
    r.subscribe(data => {
      console.log(data)
      if(data['auth']){
        this.cookie.set("jwttoken", data['token']);
        this.cookie.set("restaurant_id", data['_id']);
        this.cookie.set("name", data["name"])
        this.showFile = true

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

  // logRestIn(event){
  //   event.preventDefault()
  //   console.log(event)
  //   this.timesSubmitted += 1
  //   if (this.timesSubmitted > 1){
  //     console.log("captcha has been prompted")
  //   }
  // }
}
