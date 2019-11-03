import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-restaurantviewmenu',
  templateUrl: './restaurantviewmenu.component.html',
  styleUrls: ['./restaurantviewmenu.component.css']
})
export class RestaurantviewmenuComponent implements OnInit {

  detailsForm;
  restaurantmenudetails
  imageurl
  constructor(
    private httpService:HttpClient,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService,
    private http: HttpClient) {
    this.detailsForm = this.formBuilder.group({
      name: '',
      location: '',
      food_category: '',
      res_image: '',
      contact: '',
      working_hours: ''
    });

  }

  ngOnInit() {
    console.log("fge" + this.cookie.get('restaurant_id'))
    this.httpService.get('/restaurant/menu/'+this.cookie.get('restaurant_id')).subscribe(data => {
      // this.detailsForm = data;
      console.log(data)
      if (data != null){
        this.detailsForm.controls['name'].setValue(data['name'])
        this.detailsForm.controls['location'].setValue(data['location'])
        this.detailsForm.controls['food_category'].setValue(data['food_category'])
        this.detailsForm.controls['contact'].setValue(data['contact'])
        this.detailsForm.controls['working_hours'].setValue(data['working_hours'])
      }


    });



    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
    jwttoken: this.cookie.get("jwttoken")
  });

  var url='/display_menu' + this.cookie.get ('restaurant_id')
  
  this.http.get(url, {headers}).subscribe(data => {
    // this.detailsForm = data;
    //console.log(data)
    
    if (data != null){
      this.restaurantmenudetails = data
      this.restaurantmenudetails.image = "/menu_images/" + this.restaurantmenudetails.image
      console.log(data)
    }
  })

  }


}
