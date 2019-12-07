import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable()


export class PusherService {
  private _pusher: any;
  constructor() { 
    this._pusher = new Pusher('a2dc9ba2d47e27762a7f', {
      clsuter: 'us2',
      encryted: true
    });
  }

  getPusher(){
    return this._pusher;
  }
}
