import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';
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
  
  constructor(private pusherService: PusherService,
    private http: HttpClient,
    private router: Router,) { 
    this.messages = [];
  }


  



  sendMessage(user: string, text: string) {
    const message: Message = {
       user: user,
       text: text,
    }
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message);
  }
  
  ngOnInit() {

    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    });
  }

}
