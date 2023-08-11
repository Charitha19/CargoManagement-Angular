import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './cargo/order/order.component';
import { StatusComponent } from './cargo/status/status.component';
import { CargoRoutingModule } from './cargo/cargo-routing.module';
import { CargoHomeComponent } from './cargo/cargo-home/cargo-home.component';
import { LogoutComponent } from './cargo/logout/logout.component';
import { PaymentPipe } from './cargo/payment.pipe';
import { CancelComponent } from './cargo/cancel/cancel.component';
import { AdminComponent } from './cargo/admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminDeleteComponent } from './cargo/admin-delete/admin-delete.component';
import { AdminEditComponent } from './cargo/admin-edit/admin-edit.component';
import { WeightPipe } from './cargo/weight.pipe';
import { CargoHomeContentComponent } from './cargo/cargo-home-content/cargo-home-content.component';
import { CurrencyPipe } from './cargo/currency.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    OrderComponent,
    StatusComponent,
    CargoHomeComponent,
    LogoutComponent,
    PaymentPipe,
    CancelComponent,
    AdminComponent,
    ContactUsComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    AdminDeleteComponent,
    AdminEditComponent,
    WeightPipe,
    CargoHomeContentComponent,
    CurrencyPipe
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CargoRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
