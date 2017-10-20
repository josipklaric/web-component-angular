import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-weather-bar',
  templateUrl: './weather-bar.component.html',
  styles: []
})
export class WeatherBarComponent implements OnInit {

  private weatherData: any;

  constructor(private _sharedService: SharedService) {
    console.log('>> weather-bar -> constructor -> _sharedService: ' + _sharedService);
    this.weatherData = {
      'city': 'Tuhelj',
      'temp': 33
    };
    this._sharedService.on('weatherChange').subscribe(message => {
      console.log('>> weather-bar -> weatherChange -> message: ' + JSON.stringify(message));
      this.weatherData = message;
    });
  }

  @Input()
  currentWeatherData: any = {
    'city': 'Tuhelj',
    'temp': 33
  };

  weatherDataChanged(weatherData) {
    this.currentWeatherData = weatherData;
  }

  ngOnInit() {
    console.log('>> weather-bar -> ngOnInit');
  }

}
