import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-order-history',
  templateUrl: './customer-order-history.component.html',
  styleUrls: ['./customer-order-history.component.css']
})
export class CustomerOrderHistoryComponent implements OnInit {
  ratingForm
  constructor(
    private http:HttpClient,
    private cookie:CookieService,
    private formBuilder: FormBuilder
  ) { 
    this.ratingForm = this.formBuilder.group({
      ratings: ''
    })

  }
  orders


  ngOnInit() {
    var url='/customer/order_history/' + this.cookie.get ('customer_id')
    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });
    this.http.get(url, {headers}).subscribe(data => {
      // this.detailsForm = data;
      
      if (data != null){
        this.orders = data
        console.log(this.orders)
      }
    })
  }
  onRate(rateObject, order){
    // console.log(rateObject)
    // console.log(order)
    var data = {
      order_id: order._id,
      restaurant_id: order.restaurant_id,
      ratings: rateObject.ratings
    }
    console.log(data)
    rateObject['ratings'] = 0
    this.ratingForm.ratings = 0
    order.ratings = data["ratings"]


    var url = "restaurant/add_restaurant_rating/"+order.restaurant_id
    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });
    this.http.post(url, data, {headers}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
    )
  }

}
