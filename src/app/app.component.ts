import { Component, NgModule, ViewChild } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { WeatherBarComponent } from './weather-bar/weather-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Components Demo';


}
