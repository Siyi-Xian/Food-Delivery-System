import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'; 

@Component({
  selector: 'app-customer-recommendations',
  templateUrl: './customer-recommendations.component.html',
  styleUrls: ['./customer-recommendations.component.css']
})
export class CustomerRecommendationsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }
  results
  ngOnInit() {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });
    var params = new HttpParams().set("customer_id", this.cookie.get("customer_id"))
    this.http.get('/restaurant/restaurant_recommendations', {headers, params}).subscribe(data => {
      // this.detailsForm = data;
      console.log(data)
      this.results = data
    })
  
  }

}
