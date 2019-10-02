import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantreg',
  templateUrl: './restaurantreg.component.html',
  styleUrls: ['./restaurantreg.component.css']
})
export class RestaurantregComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newRest(event){
    event.preventDefault()
    const password = event.target.password.value
    const confirmpass = event.target.confirmpass.value
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
