import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-deliveryeditprofile',
  templateUrl: './deliveryeditprofile.component.html',
  styleUrls: ['./deliveryeditprofile.component.css']
})
export class DeliveryeditprofileComponent implements OnInit {

  delivery_details
  constructor( private http:HttpClient,
               private cookie:CookieService) { }

  ngOnInit() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });


    var url = '/restaurant/display_details/' + this.cookie.get('restaurant_id')

    this.http.get(url, {headers}).subscribe(data => {
      // this.detailsForm = data;

      if (data != null) {
        this.delivery_details = data
        console.log(data)
      }
    })
  }

}
