import { Component, OnInit } from '@angular/core';
import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-chatfeature',
  templateUrl: './chatfeature.component.html',
  styleUrls: ['./chatfeature.component.css']
})
export class ChatfeatureComponent implements OnInit {
  title = 'Angular Chatroom';
  messages = [];
  users = [];
  currentUser: any;

  _username: string = '';
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }

  _message: string = '';
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  sendMessage() {
    const { message, currentUser } = this;
    currentUser.sendMessage({
      text: message,
      roomId: '0dae596e-50f4-4411-95d5-2014421936fc',
    });
    this.message = '';
  }


  
  addUser() {
    const username = this.cookie.get("name");
    console.log({username})
    axios.post('/chat/users', { username })
      .then(() => {
        const tokenProvider = new Chatkit.TokenProvider({
          url: '/chat/authenticate'
        });

        const chatManager = new Chatkit.ChatManager({
          instanceLocator: 'v1:us1:dcb29a79-09aa-41bb-a0ec-fdb33220fb0a',
          userId: username,
          tokenProvider
        });

        return chatManager
          .connect()
          .then(currentUser => {
            currentUser.subscribeToRoom({
              roomId: '0dae596e-50f4-4411-95d5-2014421936fc',
              messageLimit: 100,
              hooks: {
                onMessage: message => {
                  this.messages.push(message);
                },
                onPresenceChanged: (state, user) => {
                  this.users = currentUser.users.sort((a, b) => {
                    if (a.presence.state === 'online') return -1;

                    return 1;
                  });
                },
              },
            });

            this.currentUser = currentUser;
            this.users = currentUser.users;
          });
      })
        .catch(error => console.error(error))
  }
  constructor(
    private cookie: CookieService
    ) {}

  ngOnInit() {
    this.addUser()
  }

}
