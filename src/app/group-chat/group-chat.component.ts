import { Component, OnInit } from '@angular/core';
import { Ichat } from '../interfaces/ichat';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent implements OnInit {

  chats: Ichat[] = [];
  message: string;
  sending: boolean;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this._chatService.getChannel().bind('chat', data =>{
      if(data.email == this._chatService.user.email){
        data.isMe = true;
      }
      this.chats.push(data);
    });
  }

  sendMessage(message: string){
    this.sending = true;
    this._chatService.sendMessage(message)
    .subscribe(resp => {
      this.message = undefined;
      this.sending = false;
    },
    (error) => {
      this.sending = false;
    });
  }

}
