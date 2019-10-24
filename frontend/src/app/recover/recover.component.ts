import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  userRecoverForm;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService) { 
      this.userRecoverForm = this.formBuilder.group({
        name: '',
        email: ''
      });
    }


  private showFile: boolean = false;

  onClickOpenVerification(){
    this.showFile = true;
  }

  ngOnInit() {
  }

}
