import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturantlogin',
  templateUrl: './resturantlogin.component.html',
  styleUrls: ['./resturantlogin.component.css']
})
export class ResturantloginComponent implements OnInit {

  constructor() { }
  timesSubmitted = 0
  ngOnInit() {
  }

  logRestIn(event){
    event.preventDefault()
    console.log(event)
    this.timesSubmitted += 1
    if (this.timesSubmitted > 1){
      console.log("captcha has been prompted")
    }
  }
}
