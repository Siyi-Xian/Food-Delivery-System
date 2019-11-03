import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  userSearchForm;
  result;
  searchFilter;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private cookie: CookieService
  ) { 
    this.userSearchForm = this.formBuilder.group({
      search: ''
    });
   }

  ngOnInit() {
  }

  updateToLocation(){
    this.searchFilter = "Location";
    console.log(this.searchFilter);
  }
  updateToResName(){
    this.searchFilter = "Name";
    console.log(this.searchFilter);
  }
  updateToFoodCat(){
    this.searchFilter = "category";
    console.log(this.searchFilter);
  }

  onSubmit(event){
    var jwttoken = this.cookie.get("jwttoken")
    //we'll need to change the endpoint to the endpoint for the search on the backend
    this.http.get<any>('/restaurant/restaurant_list', event).subscribe((data: any) => this.result = {data});
    this.displayResult(this.result);
  }

  //function to render the result of the search to the website
  displayResult(result){
    console.log(result);
    
  }

}
