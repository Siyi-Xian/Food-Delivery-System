import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
declare const Pusher: any;
@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  messagesChannel: any;

  constructor() { 
    this.pusher = new Pusher(environment.pusher.key,{
      authEndpoint: '/pusher/auth',});
    this.messagesChannel = this.pusher.subscribe('private-messages');
  }
}
