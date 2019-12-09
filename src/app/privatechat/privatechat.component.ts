import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {CookieService} from 'ngx-cookie-service';

import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';

@Component({
  selector: 'app-privatechat',
  templateUrl: './privatechat.component.html',
  styleUrls: ['./privatechat.component.css']
})
export class PrivatechatComponent implements OnInit {
  userId = '';
  currentUser = <any>{};
  messages = [];
  currentRoom = <any>{};
  roomUsers = [];
  userRooms = [];
  newMessage = '';
  newRoom = {
    name: '',
    isPrivate: false
  };
  joinableRooms = [];
  newUser = '';
  constructor(private route: ActivatedRoute,
    private cookie: CookieService,
    private router: Router) {

  }

  ngOnInit() {
    // this.newRoom.name = this.route.snapshot.params['order_id']
    this.userId = this.cookie.get('name')
    this.addUser()
    this.newRoom.name = this.route.snapshot.params['order_id']
    // this.currentUser.getJoinableRooms()
    // console.log(this.currentUser)
    // console.log
    // this.connectToRoom(this.route.snapshot.params['order_id'])
    // this.createRoom()
    // this.addUser(this.route.snapshot.params['order_id'])
  }
  addUserToRoom() {
    const { newUser, currentUser, currentRoom } = this;
    currentUser.addUserToRoom({
      userId: newUser,
      roomId: currentRoom.id
    })
      .then((currentRoom) => {
        this.roomUsers = currentRoom.users;
      })
      .catch(err => {
        console.log(`Error adding user: ${err}`);
      });

    this.newUser = '';
  }

  createRoom() {
    const { newRoom: { name, isPrivate }, currentUser } = this;
    // console.log(this.currentUser)
    if (name.trim() === '') return;

    currentUser.createRoom({
      name,
      private: isPrivate,
      id: name
    }).then(room => {
      this.connectToRoom(room.id);
      this.newRoom = {
        name: '',
        isPrivate: false,
      };
    })
    .catch(err => {
      console.log(`Error creating room ${err}`)
      this.connectToRoom(name);
      this.newRoom = {
        name: '',
        isPrivate: false,
      };
    })
  }

  getJoinableRooms() {
    const { currentUser } = this;
    currentUser.getJoinableRooms()
    .then(rooms => {
      this.joinableRooms = rooms;
    })
    .catch(err => {
      console.log(`Error getting joinable rooms: ${err}`)
    })
  }

  joinRoom(id) {
    const { currentUser } = this;
    currentUser.joinRoom({ roomId: id })
    .catch(err => {
      console.log(`Error joining room ${id}: ${err}`)
    })
  }

  connectToRoom(id) {
    this.messages = [];
    const { currentUser } = this;
    
    currentUser.subscribeToRoom({
      roomId: `${id}`,
      messageLimit: 100,
      hooks: {
        onMessage: message => {
          this.messages.push(message);
        },
        onPresenceChanged: () => {
          this.roomUsers = this.currentRoom.users.sort((a) => {
            if (a.presence.state === 'online') return -1;

            return 1;
          });
        },
      },
    })
    .then(currentRoom => {
      this.currentRoom = currentRoom;
      this.roomUsers = currentRoom.users;
      this.userRooms = currentUser.rooms;
    });
  }

  sendMessage() {
    const { newMessage, currentUser, currentRoom } = this;
    
    if (newMessage.trim() === '') return;

    currentUser.sendMessage({
      text: newMessage,
      roomId: `${currentRoom.id}`,
    });

    this.newMessage = '';
  }

  addUser() {
    const { userId } = this;
    axios.post('/privatechat/users', { userId })
      .then(() => {
        const tokenProvider = new Chatkit.TokenProvider({
          url: '/privatechat/authenticate'
        });

        const chatManager = new Chatkit.ChatManager({
          instanceLocator: 'v1:us1:dcb29a79-09aa-41bb-a0ec-fdb33220fb0a',
          userId,
          tokenProvider
        });

        return chatManager
          .connect({
            onAddedToRoom: room => {
              console.log(`Added to room ${room.name}`)
              this.userRooms.push(room);
              this.getJoinableRooms();
            },
          })
          .then(currentUser => {
            this.currentUser = currentUser;
            this.connectToRoom('<your chatkit room id>');
            this.getJoinableRooms();
          });
      })
        .catch(error => console.error(error))
  }

}
