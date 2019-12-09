import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat = 39.172981;
  lng = -86.523010;
  customer_id
  restaurant_id
  customer_details
  restaurant_details
  origin: marker = {
    lat: this.lat,
    lng: this.lng,
    draggable: false
  }

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private cookie: CookieService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customer_id = this.route.snapshot.params['customer_id']
    this.restaurant_id = this.route.snapshot.params['restaurant_id']
    console.log(this.customer_id)
    console.log(this.restaurant_id)
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.origin.lat = this.lat;
        this.origin.lng = this.lng;
      });
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });

    var url = '/restaurant/display_details/' + this.restaurant_id

    this.http.get(url, {headers}).subscribe(data => {
      // this.detailsForm = data;

      if (data != null) {
        this.restaurant_details = data
        console.log(this.restaurant_details)
      }
    });

    var url = '/customer/display_details/' + this.customer_id
    // var params = new HttpParams().set("id", customer_id)
    this.http.get(url, {headers}).subscribe(data => {
      // console.log(data)

      if (data != null) {

        this.customer_details = data['result']
        console.log(this.customer_details)
      }
    });

  }
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
