import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {
  customer_details
  constructor(
    private cookie: CookieService,
    private http: HttpClient) { }

  ngOnInit() {

    let headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });


    var customer_id = this.cookie.get ('customer_id')
    var url='/customer/display_details/'+customer_id
    // var params = new HttpParams().set("id", customer_id)
    this.http.get(url, {headers}).subscribe(data => {
      // console.log(data)

      if (data != null){
        
        this.customer_details = data['result']
        this.customer_details.customer_image = "/customer_images/" + customer_id+".png"
        console.log(this.customer_details)
      }
    });

  }

}
