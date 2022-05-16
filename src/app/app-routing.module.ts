import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminUserOrderComponent } from './admin-user-order/admin-user-order.component';
import { BabiesWearComponent } from './clothes-design-selection/babies-wear/babies-wear.component';
import { ClothesDesignSelectionComponent } from './clothes-design-selection/clothes-design-selection.component';
import { LadiesWearComponent } from './clothes-design-selection/ladies-wear/ladies-wear.component';
import { MensWearComponent } from './clothes-design-selection/mens-wear/mens-wear.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewconfirmComponent } from './newconfirm/newconfirm.component';
import { OrdersComponent } from './orders/orders.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'nav',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminPanelComponent},
  {path:'kids',component:BabiesWearComponent},
  {path:'women',component:LadiesWearComponent},
  {path:'mens',component:MensWearComponent},
  {path:'confirm',component:ConfirmOrderComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'clothes',component:ClothesDesignSelectionComponent},
  {path:'test',component:OrdersComponent},
  {path:'adminadd',component:AdminAddComponent },
  {path:'adminuser', component:AdminUserOrderComponent},
  {path:'newc',component:NewconfirmComponent}



  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
