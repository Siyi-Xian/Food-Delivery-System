import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




interface Message{
  text: string;
  user: string;

}

@Component({
  selector: 'app-chatfeature',
  templateUrl: './chatfeature.component.html',
  styleUrls: ['./chatfeature.component.css']
  
})






export class ChatfeatureComponent implements OnInit {

  
    text: string;
    user: string;
    messages: Array<Message>;
  
  constructor(
    private http: HttpClient,
    private router: Router,) { 
    this.messages = [];
  }

  ngOnInit(){
    
  }
  



}
