import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ResturantloginComponent } from './resturantlogin/resturantlogin.component';
import { RestaurantregComponent } from './restaurantreg/restaurantreg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    PublicComponent,
    RegistrationComponent,
    ResturantloginComponent,
    RestaurantregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PublicComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'public',
        component: PublicComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'resturantlogin',
        component: ResturantloginComponent
      },
      {
        path: 'restaurantreg',
        component: RestaurantregComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
