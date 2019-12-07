import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deliveryprofile',
  templateUrl: './deliveryprofile.component.html',
  styleUrls: ['./deliveryprofile.component.css']
})
export class DeliveryprofileComponent implements OnInit {
  deliveryProfileForm
  delivery_details
  constructor( 
    private http:HttpClient,
    private formbuilder: FormBuilder,
    private cookie:CookieService) { 

      this.deliveryProfileForm = this.formbuilder.group({
        name: '',
        contact: '',
        email:'',
        password: ''
      })

    }

  image
  onFileSelected(event){
    const file = event.target.files[0];
    this.image = file
  }
  ngOnInit() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      jwttoken: this.cookie.get("jwttoken")
    });
    var delivery_id = this.cookie.get ('delivery_id')
    var url = '/delivery/display_details/' + this.cookie.get('delivery_id')
    this.http.get(url, {headers}).subscribe(data => {
      // this.detailsForm = data;
      if (data != null) {
        this.delivery_details = data['result']
        this.delivery_details.delivery_image = "/delivery_images/" + delivery_id+".png"
        this.deliveryProfileForm.get('name').setValue(this.delivery_details['name'])
        this.deliveryProfileForm.get('email').setValue(this.delivery_details['email'])
        this.deliveryProfileForm.get('contact').setValue(this.delivery_details['contact'])
        console.log(this.delivery_details)
      }
    })
  }

  onSubmit(profile){
    let headers = new HttpHeaders({ 
      // 'Content-Type': 'multipart/form-data',
      jwttoken: this.cookie.get("jwttoken")
    });
    var jwttoken = this.cookie.get("jwttoken")
    var delivery_id = this.cookie.get("delivery_id");
    const formData = new FormData()
    formData.append("id", delivery_id);
    formData.append("name", profile["name"])
    formData.append("email", profile["email"])
    formData.append("contact", profile["contact"])
    formData.append("password", profile["password"])
    formData.append("jwttoken", jwttoken)
    formData.append("image", this.image, this.cookie.get('delivery_id')+'.png')
    this.http.post<any>('/delivery/details', formData, {headers}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
    )
  }

}
