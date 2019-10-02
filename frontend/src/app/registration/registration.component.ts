import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newUser(event){
    event.preventDefault()
    const password = event.target.password.value
    const confirmpass = event.target.confirmpass.value
    console.log(password)
    console.log(confirmpass)
    if(password == confirmpass){
      console.log("User info submitted")
      return true
    }
    else{
      alert("Passwords do not match")
      return false
    }
  }

}
