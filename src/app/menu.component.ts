import { Component, OnInit, NgModule, Output, Input, EventEmitter } from '@angular/core';
import { WeatherBarComponent } from './weather-bar/weather-bar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
