import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-weather-bar',
  templateUrl: './weather-bar.component.html',
  styles: []
  // , encapsulation: ViewEncapsulation.Emulated
})
export class WeatherBarComponent implements OnInit {

  private weatherData: any;

  constructor(private _sharedService: SharedService) {
    this.weatherData = {
      'city': 'Zagreb',
      'temp': 21
    };
    this._sharedService.on('weatherChange').subscribe(message => {
      // console.log('>> weather-bar -> weatherChange -> message: ' + JSON.stringify(message));
      this.weatherData = message;
    });
  }

  ngOnInit() {
  }

}
