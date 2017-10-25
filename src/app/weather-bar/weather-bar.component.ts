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
    this.weatherData = {
      'city': 'Tuhelj',
      'temp': 33
    };
    this._sharedService.on('weatherChange').subscribe(message => {
      // console.log('>> weather-bar -> weatherChange -> message: ' + JSON.stringify(message));
      this.weatherData = message;
    });
  }

  ngOnInit() {
  }

}
