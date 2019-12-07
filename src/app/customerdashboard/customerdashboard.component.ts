import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'; 
import { SocialLoginModule, AuthServiceConfig, AuthService } from 'angularx-social-login'; 
import { SocialloginService } from '../sociallogin.service';   
import { Socialusers } from '../socialusers'  

declare var webkitSpeechRecognition: any
@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
  socialusers = new Socialusers(); 
  userSearchForm;
  results;
  searchFilter;
  // @ViewChild('restaurant_name',{static: true}) restaurant_name

  constructor(
    public OAuth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private cookie: CookieService,
  ) { 
    this.userSearchForm = this.formBuilder.group({
      restaurant_name: '',
      location: '',
      food_category: '',
      
    });
   }

  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));  
    console.log(this.socialusers.email);  
  }

  


  voiceSearchName(){
    // console.log("hello")
    if('webkitSpeechRecognition' in window){
      this.userSearchForm.get('restaurant_name').setValue("")
      console.log("hello")
      const vSearch = new webkitSpeechRecognition();
      vSearch.continuous = false
      vSearch.interimresults = false
      vSearch.lang = "en-US";
      vSearch.start();
      const userSearchForm = this.userSearchForm
      vSearch.onresult = function(e){
        console.log(e.results[0][0].transcript)
        userSearchForm.get('restaurant_name').setValue(e.results[0][0].transcript)
        vSearch.stop()
      }
      vSearch.onerror = function(e){
        console.log(e)
        vSearch.stop()
      }
    }
    else{
      console.log("Speech Recognition Not Supported in your Browser")
    }
  }

  voiceSearchCategory(){
    // console.log("hello")
    if('webkitSpeechRecognition' in window){
      this.userSearchForm.get('food_category').setValue("")
      console.log("hello")
      const vSearch = new webkitSpeechRecognition();
      vSearch.continuous = false
      vSearch.interimresults = false
      vSearch.lang = "en-US";
      vSearch.start();
      const userSearchForm = this.userSearchForm
      vSearch.onresult = function(e){
        console.log(e.results[0][0].transcript)
        userSearchForm.get('food_category').setValue(e.results[0][0].transcript)
        vSearch.stop()
      }
      vSearch.onerror = function(e){
        console.log(e)
        vSearch.stop()
      }
    }
    else{
      console.log("Speech Recognition Not Supported in your Browser")
    }
  }

  voiceSearchLocation(){
    // console.log("hello")
    if('webkitSpeechRecognition' in window){
      this.userSearchForm.get('location').setValue("")
      console.log("hello")
      const vSearch = new webkitSpeechRecognition();
      vSearch.continuous = false
      vSearch.interimresults = false
      vSearch.lang = "en-US";
      vSearch.start();
      const userSearchForm = this.userSearchForm
      vSearch.onresult = function(e){
        console.log(e.results[0][0].transcript)
        userSearchForm.get('location').setValue(e.results[0][0].transcript)
        vSearch.stop()
      }
      vSearch.onerror = function(e){
        console.log(e)
        vSearch.stop()
      }
    }
    else{
      console.log("Speech Recognition Not Supported in your Browser")
    }
  }
  updateToRatings(){
    this.results.sort(function(a, b){
      return b.ratings/b.num_ratings - a.ratings/a.num_ratings;
  });
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

  // openMenu(id){
  //   console.log(id);
    
  // }
  onSubmit(event){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });
    
    var params = new HttpParams().set("restaurant_name", event['restaurant_name'])
    .set("location", event['location'])
    .set("food_category", event['food_category'])
    console.log(params)
    this.http.get('/restaurant/restaurants_list', {headers, params}).subscribe(data => {
      // this.detailsForm = data;
      console.log(data)
      this.results = data
    })
  }

  //function to render the result of the search to the website
  displayResult(result){
    console.log(result);
    
  }
  logout() {  
    alert(1);  
     this.OAuth.signOut().then(data => {  
       debugger;  
       this.router.navigate([`/Login`]);  
     });  
   }  

}
