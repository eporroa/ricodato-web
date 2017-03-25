import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Subject } from 'rxjs/Subject';
import { AngularFireAuthService } from "./providers/angular-fire-auth.service";
//import * as GeoFire from 'geofire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 0;
  lng: number = 0;
  title: string = 'El Rico Dato';
  isLoggedIn: boolean;

  private limit: Subject<number> = new Subject<number>();
  
  constructor(
    public afService: AngularFireAuthService,
    private router: Router
  ) {

    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          this.isLoggedIn = false;
        }
        else {
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );

    this.getLocation();

    // af.database.list(`items`, {
    //   query: {
    //     limitToFirst: this.limit
    //   }
    // }).subscribe((val) => console.log(val));

    // this.limit.next(1);

    // setTimeout(() => {
    //   this.limit.next(2);
    // }, 2000);

    // setTimeout(() => {
    //   this.limit.next(3);
    // }, 4000);

    // let random = Math.floor(Math.random() * 10);
    // setTimeout(() => {
    //   af.database.object(`test/i0`).set(random);
    // }, 6000);
  }
  login() {
    console.log(this.afService.loginWithGoogle);
    this.afService.loginWithGoogle().then((data) => {
      console.log(data);
      this.isLoggedIn = true;
    })
  }
  logout() {
    this.afService.logout();
  }

  getLocation() {
    if (typeof navigator !== "undefined" && typeof navigator.geolocation !== "undefined") {
      navigator.geolocation.getCurrentPosition(this.geolocationCallback.bind(this));
    } else {
      alert("Your browser does not support the HTML5 Geolocation API, so this demo will not work.")
    }
  }

  geolocationCallback(location){    
    this.lat = location.coords.latitude;
    this.lng = location.coords.longitude;

    /*let geoFire = GeoFire;
    console.log(geoFire);*/
    //new GeoFire(this.af.database.list('/items_location')._ref);
  }
}
