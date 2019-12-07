import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-deliverycurrentorders',
  templateUrl: './deliverycurrentorders.component.html',
  styleUrls: ['./deliverycurrentorders.component.css']
})
export class DeliverycurrentordersComponent implements OnInit {

  constructor(private http:HttpClient,
              private cookie:CookieService) { }
  orders

  fullfillOrder(id, i){
    var url = "delivery/fullfillorder"
    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });
    this.http.post(url, {id: id}, {headers}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
    )
    this.orders.splice(parseInt(i), 1)
  }

  ngOnInit() {
    var url='/delivery/current_orders/' + this.cookie.get ('delivery_id')
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
