import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Pro1Component } from './pro1/pro1.component';
import { Pro2Component } from './pro2/pro2.component';
import { Pro3Component } from './pro3/pro3.component';
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
    Pro2Component,
    Pro3Component,
    HomiComponent,
    ProjectdetailComponent,
    HelloComponent
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



