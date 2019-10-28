import {Component, OnInit} from '@angular/core';
// import { AuthService } from '../auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm;
  userVerifyForm;
  response: any;
  private showFile: boolean = false;
  timesSubmitted = 0;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService) {
    this.userLoginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
    this.userVerifyForm = this.formBuilder.group({
      otp: ''
    })
  }

  veryOTPAsyn(otpControl: FormControl): Promise<any> {
    console.log(otpControl)
    console.log(otpControl.hasError('invalidOtp'))
    return new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          resolve({invalidOtp:true});
        }, 500);
      });
  }

  ngOnInit() {

  }

  onSubmit(userData) {

    var shouldVerify = true

    var r = this.loginService.sendRequest(userData, 'http://localhost:3000/authentication/login/user');
    var r = this.loginService.sendRequest(userData, "http://localhost:3000/login/user");
    r.subscribe(data => {
      //check if the user is verified 
      if (data['auth']) {
        this.cookie.set('jwttoken', data['token']);
        this.router.navigate(['/customerdashboard']);
        shouldVerify = false
      }
    });

    // this.cookie.set("userid", "123")
    // console.log(this.response)
    const payload = {
      jwttoken: this.cookie.get('jwttoken')
    };
    console.log(payload);
    console.log(this.cookie.get('jwttoken'));
    if(shouldVerify){
      r = this.loginService.sendRequest(payload, 'http://localhost:3000/verifyotp');
      r.subscribe(data => {
        console.log(data);
      });
    }
  }

  
  onClickOpenVerification(){
    this.showFile = true;
  }

}
