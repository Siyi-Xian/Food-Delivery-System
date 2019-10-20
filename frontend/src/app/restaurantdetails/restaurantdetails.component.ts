import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-restaurantdetails',
  templateUrl: './restaurantdetails.component.html',
  styleUrls: ['./restaurantdetails.component.css']
})
export class RestaurantdetailsComponent implements OnInit {

  detailsForm
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService) { 
      this.detailsForm = this.formBuilder.group({
        name: "",
        location: "",
        food_category: "",
        res_image: "",
        contact: "",
        working_hours: ""
      })  
    
  }


  onSubmit(details){
    var jwttoken = this.cookie.get("jwttoken")
    details["jwttoken"] = jwttoken
    details['_id'] = this.cookie.get("restaurant_id")
    details['image'] = details['image'].encode(details['image'])
    var r = this.loginService.sendRequest(details, "http://localhost:3000/restaurant/restaurant_details");
    r.subscribe(data => {
      console.log(data)
      
    })
  }
  
  ngOnInit() {
  }



}
