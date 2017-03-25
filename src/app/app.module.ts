import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

import { AngularFireAuthService } from './providers/angular-fire-auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot(environment.googleMapsConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AngularFireAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
