import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Pro1Component } from './pro1/pro1.component';
import { HomiComponent } from './homi/homi.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello/hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Pro1Component,
<<<<<<< HEAD
    Pro2Component,
    Pro3Component,
    HomiComponent,
    ProjectdetailComponent,
    HelloComponent
=======
    HomiComponent
>>>>>>> e8cf91a2f91c1969e6db4c2b556dc51df59e8ad2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



