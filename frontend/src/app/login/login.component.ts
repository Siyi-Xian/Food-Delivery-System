import { Component, OnInit,ViewChildren, ElementRef } from '@angular/core';
// import { AuthService } from '../auth.service';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form: FormGroup;
 // formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
  //@ViewChildren('formRow') rows: any;


  

 // toFormGroup(elements) {
   // const group: any = {};

    //elements.forEach(key => {
      //group[key] = new FormControl('', Validators.required);
    //});
    //return new FormGroup(group);
 // }

  // keyUpEvent(event, index) {
  //   let pos = index;
  //   if (event.keyCode === 8 && event.which === 8) {
  //     pos = index - 1 ;
  //   } else {
  //     pos = index + 1 ;
  //   }
  //   if (pos > -1 && pos < this.formInput.length ) {
  //     this.rows._results[pos].nativeElement.focus();
  //   }

  // }


  userLoginForm;


  timesSubmitted = 0;
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder) { 
      this.userLoginForm = this.formBuilder.group({
        email: "",
        password: "",
        otp:""
      })
      //this.form = this.toFormGroup(this.formInput);
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

  onSubmit(userData){
    console.log(this.loginService.sendRequest(userData, "http://localhost:3000/login/user"));
    //console.log(this.form.value);
  }

  //onverify(){
   // console.log(this.form.value);
 // }

  // logUserIn(event){
  //   event.preventDefault()
  //   console.log(event)
  //   this.timesSubmitted += 1
  //   if (this.timesSubmitted > 1){
  //     console.log("captcha has been prompted")
  //   }
    
    //const target = event.target
    //console.log(target.srcElement['0'])
    //const email = target.querySelector('email').value
    //const password = target.querySelector('password').value
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
