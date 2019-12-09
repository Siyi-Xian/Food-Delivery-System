import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat = 39.172981;
  lng = -86.523010;

  restaurant = [
    {
      location: {
        lat: 39.170957,
        lng: -86.516549,
        label: 'D',
        draggable: false
      }
    }
  ]

  destination: marker = {
    lat: 39.172981,
    lng: -86.523010,
    label: 'R',
    draggable: true
  }

  delivery: marker = {
    lat: this.lat,
    lng: this.lng,
    label: 'D',
    draggable: false
  }

  ngOnInit(): void {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.delivery.lat = this.lat;
        this.delivery.lng = this.lng;
      });
    }


  }
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
