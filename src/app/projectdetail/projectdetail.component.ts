import { Component, OnInit } from '@angular/core';
import { CardConfig } from 'src/types';


@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular';
  cardConfigs:CardConfig[] =
  [
    {title:'titele', imageUrl:  'https://angular.io/assets/images/logos/angular/angular.png'}
,  { title:'titele', imageUrl: 'https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png'}
,  { title:'titele', imageUrl: 'https://vuejs.org/images/logo.png'}
,{   title:'titele', imageUrl:  'https://coryrylan.com/assets/images/posts/types/stenciljs.png'}
  ]
  // images = [this.image1, this.image2, this.image3, this.image4];
}


