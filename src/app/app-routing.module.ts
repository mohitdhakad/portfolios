import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Pro1Component } from './pro1/pro1.component';
import { Pro2Component } from './pro2/pro2.component';
import { Pro3Component } from './pro3/pro3.component';
import { HomiComponent } from './homi/homi.component';
const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'pro1' , component: Pro1Component},
  { path: 'pro2' , component: Pro2Component},
  { path: 'pro3' , component: Pro3Component},
  { path: 'homi' , component: HomiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
