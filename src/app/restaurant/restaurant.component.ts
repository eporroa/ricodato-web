import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurantes: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.restaurantes = af.database.list('/restaurantes');
  }
  

  ngOnInit() {
  }

  saveRestaurant(restForm){
    console.log(restForm);
  }

}
