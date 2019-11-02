import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-restaurantviewdetails',
  templateUrl: './restaurantviewdetails.component.html',
  styleUrls: ['./restaurantviewdetails.component.css']
})
export class RestaurantviewdetailsComponent implements OnInit {

   restaurantdetails=[];
   errorMsg:string;
   errorFlag:boolean=false;
  constructor( private http:HttpClient,
      private cookie:CookieService) { }

  ngOnInit() {
    var url='/display_details/'+ this.cookie.get ('restaurant_id')
    this.http.get(url)

  }

}
