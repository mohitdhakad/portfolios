import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Pro1Component } from './pro1/pro1.component';
import { HomiComponent } from './homi/homi.component';
const routes: Routes = [
  { path: '' , component: HomiComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'pro1' , component: Pro1Component},
<<<<<<< HEAD
  { path: 'pro2' , component: Pro2Component},
  { path: 'pro3' , component: Pro3Component},
  { path: '' , component: HomiComponent },
=======
>>>>>>> e8cf91a2f91c1969e6db4c2b556dc51df59e8ad2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
