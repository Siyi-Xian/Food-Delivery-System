import {Component, OnInit} from '@angular/core';
// import { AuthService } from '../auth.service';
import {FormBuilder} from '@angular/forms';
import {LoginService} from '../login.service';
import {CookieService} from 'ngx-cookie-service';
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { SocialloginService } from '../sociallogin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socialusers } from '../socialusers' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('recaptcha', {static: true}) recaptchaElement: ElementRef;
  @ViewChild('showfile', {static: false}) OTPElement: ElementRef;
  userLoginForm;
  response: any;

  socialusers=new Socialusers();

  timesSubmitted = 0;
  forgot_message = ""
  showFile = false;
  userVerifyForm;
  verifyOTP = false;

  constructor(
    public OAuth: AuthService,
    private SocialloginService: SocialloginService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private cookie: CookieService) {
    this.userLoginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
    this.userVerifyForm = this.formBuilder.group({
      otp: ''
    })
  }

  ngOnInit() {
    this.forgot_message = ""
    this.addRecaptchaScript();
  }

  onSubmit(userData) {
    console.log(userData)
    var r = this.loginService.sendRequest(userData, '/authentication/login/user');
    if(this.recaptchaElement == null){
      alert('Enter recaptcha');
      return;
    }
    r.subscribe(data => {
      if (data['auth']) {
        this.cookie.set('jwttoken', data['token']);
        this.cookie.set('customer_id', data['_id'])
        this.cookie.set("name", data["name"])
        this.showFile = true
        // this.router.navigate(['/customerdashboard']);
      }
    });
  }
  onVerify(userData){
    console.log(userData['otp'])
    userData['_id'] = this.cookie.get("customer_id")
    // console.log("verify")
    var jwttoken = this.cookie.get("jwttoken");
    this.http.post('/authentication/verifyotp/user', userData).subscribe(data =>{
      if (data['auth']){
        this.router.navigate(['/customerdashboard'])
      }
      else{
        alert("Invalid OTP")
      }
    })
  }
  recover(){
    var data = this.userLoginForm.get('email').value
    data = {
      'email': data
    }
    var url = "/authentication/recover/user"
    this.http.post(url, data).subscribe(
      (res)=> this.forgot_message="Password resetted",
      (err) => console.log(err)
    )
    console.log(data)
  }
  public socialSignIn(socialProvider: string){
    let socialPlatormProvider;
    if(socialProvider == 'google'){
      socialPlatormProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    else if(socialProvider == 'facebook'){
      socialPlatormProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.OAuth.signIn(socialPlatormProvider).then(socialusers =>{
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      this.Savesresponse(socialusers);
    });
  }
  

  Savesresponse(socialusers: Socialusers){
    this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) =>{
      debugger;
      console.log(res);
      this.socialusers=res;
      this.response = res.userDetail;
      localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
      this.router.navigate(['/customerdashboard']);
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

  

  // logUserIn(event){
  //   event.preventDefault()
  //   console.log(event)
  //   this.timesSubmitted += 1
  //   if (this.timesSubmitted > 1){
  //     console.log("captcha has been prompted")
  //   }

  // const target = event.target
  // console.log(target.srcElement['0'])
  // const email = target.querySelector('email').value
  // const password = target.querySelector('password').value
  // }
  /*
  // subscribe is throwing error because the http request to the backend hasn't been established yet
  this.Auth.validateUserDetails(email, password).subscribe(data => {
    if(data.success){
      // direct user to customer view
    }
    else{
      window.alert("Invalid credintials")
    }
  })
  console.log(email, password)
}
*/



}

