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
    var url='/restaurant/display_details/' + this.cookie.get ('restaurant_id')
    this.http.get(url).subscribe(data => {
      // this.detailsForm = data;
      console.log(data)
      if (data != null){
        console.log(data)
      }
    })

    var img_url='/restaurant/restaurant_image/' + this.cookie.get ('restaurant_id')
    var d = {res_image: this.cookie.get("restaurant_id")}
    this.http.get(url).subscribe(data => {
      // this.detailsForm = data;
      console.log(data)
      if (data != null){
        console.log(data)
      }
    })
  }

}
