import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event){
    console.log(event);
    console.log(event.value);
  }

}
