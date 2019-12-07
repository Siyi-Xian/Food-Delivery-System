import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-deliveryorderhistory',
  templateUrl: './deliveryorderhistory.component.html',
  styleUrls: ['./deliveryorderhistory.component.css']
})
export class DeliveryorderhistoryComponent implements OnInit {

  orders
  constructor(private http:HttpClient,
              private cookie:CookieService) { }

  ngOnInit() {
    var url='/delivery/order_history/' + this.cookie.get ('delivery_id')
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
