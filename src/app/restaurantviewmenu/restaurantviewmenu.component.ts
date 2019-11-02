import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-restaurantviewmenu',
  templateUrl: './restaurantviewmenu.component.html',
  styleUrls: ['./restaurantviewmenu.component.css']
})
export class RestaurantviewmenuComponent implements OnInit {

  detailsForm;

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
  }


}
