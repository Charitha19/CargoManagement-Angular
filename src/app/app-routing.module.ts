import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CargoHomeComponent } from './cargo/cargo-home/cargo-home.component';
import { OrderComponent } from './cargo/order/order.component';
import { LogoutComponent } from './cargo/logout/logout.component';
import { StatusComponent } from './cargo/status/status.component';
import { CancelComponent } from './cargo/cancel/cancel.component';
import { AdminComponent } from './cargo/admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminEditComponent } from './cargo/admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './cargo/admin-delete/admin-delete.component';
import { CargoHomeContentComponent } from './cargo/cargo-home-content/cargo-home-content.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'adminSignup',component:AdminSignupComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'home/signup',component:SignupComponent},
  { path: 'cargo/home', component: CargoHomeContentComponent },
  { path: 'cargo/order', component: OrderComponent },
  { path: 'cargo/home/order', component: OrderComponent },
  { path: 'cargo/logout', component: LogoutComponent },
  { path: 'cargo/home/logout', component: LogoutComponent },
  { path: 'cargo/order/logout', component: LogoutComponent },
  { path: 'cargo/status/logout', component: LogoutComponent },
  { path: 'cargo/home/order/status', component: StatusComponent },
  { path: 'cargo/home/status', component: StatusComponent },
  {path:'cargo/home/order/cargoHomeContent',component:CargoHomeContentComponent},
  { path: 'cargo/home/status/home', component: CargoHomeContentComponent },
  { path: 'cargo/home/order/status/order', component: OrderComponent },
  { path: 'cargo/home/order/status/order/home', component: CargoHomeContentComponent },
  { path: 'cargo/cancel/:id', component: CancelComponent },
  {path:'admin',component:AdminComponent},
  {path:'cargo/adminEdit/:id',component:AdminEditComponent},
  {path:'cargo/adminDelete/:id',component:AdminDeleteComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
