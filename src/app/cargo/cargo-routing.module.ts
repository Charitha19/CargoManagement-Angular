import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { StatusComponent } from './status/status.component';
import { CargoHomeComponent } from './cargo-home/cargo-home.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from '../login/login.component';
import { CancelComponent } from './cancel/cancel.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { CargoHomeContentComponent } from './cargo-home-content/cargo-home-content.component';

const routes: Routes = [
  { path: 'cargo/home', component: CargoHomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'tatus', component: StatusComponent },
  {path:'logout',component:LogoutComponent},
  {path:'login',component:LoginComponent},
  {path:'cargoHomeContent',component:CargoHomeContentComponent},
  { path: 'cargo/cancel/:id', component: CancelComponent },
  {path:'cargo/adminEdit/:id',component:AdminEditComponent},
  {path:'cargo/adminDelete/:id',component:AdminDeleteComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CargoRoutingModule { }
