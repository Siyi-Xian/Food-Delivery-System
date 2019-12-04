import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-customer-current-orders',
  templateUrl: './customer-current-orders.component.html',
  styleUrls: ['./customer-current-orders.component.css']
})
export class CustomerCurrentOrdersComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private cookie:CookieService
  ) { }
  orders
  ngOnInit() {
    var url='/customer/current_orders/' + this.cookie.get ('customer_id')
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

}
