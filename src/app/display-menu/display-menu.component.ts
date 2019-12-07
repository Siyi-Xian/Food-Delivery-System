import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {CookieService} from 'ngx-cookie-service';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {

  
  restaurant_id
  detailsForm;
  id
  imageurl
  menu
  constructor(
    private route: ActivatedRoute,
    private httpService:HttpClient,
    private cookie: CookieService,
    private http: HttpClient,
    private router: Router) {
    

  }
  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //     // console.log(params['restaurant_id'])
    //     restaurant_id = params["restaurant_id"]
    // })
    this.restaurant_id = this.route.snapshot.params['restaurant_id']
    console.log(this.restaurant_id)
    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });

    var url='/restaurant/display_menu/' + this.restaurant_id
    
    this.http.get(url, {headers}).subscribe(data => {
      // this.detailsForm = data;
      //console.log(data)
      
      if (data != null){
        this.menu = data['menu']
        // this.restaurantmenudetails.image = "/menu_images/" + this.restaurantmenudetails.image
        console.log(this.menu)
        
      }
    })

    

  }
  orderItem(item){
      var data = {
          "restaurant_id": this.restaurant_id,
          "user_id": this.cookie.get("customer_id"),
          "price": item["cost"],
          "name_of_item": item["name"],
      }
      var url = "orders/add_order"
      let headers = new HttpHeaders({ 'Content-Type': 'application/json',
        jwttoken: this.cookie.get("jwttoken")
      });
      this.http.post(url, data, {headers}).subscribe(
        (res)=> this.router.navigate(['/customercurrentorders']),
        (err) => console.log(err)
      )
    
  }



}
