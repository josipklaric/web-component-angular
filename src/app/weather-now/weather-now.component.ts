import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-weather-now',
  templateUrl: './weather-now.component.html',
  styles: []
})
export class WeatherNowComponent implements OnInit {

  cityName: string = 'Zagreb';
  countryName: string = 'HR';
  city: string = '';
  state: string = '';
  region: string = '';
  country: string = '';
  date: string = '';
  text: string = '';
  temp: string = '';

  constructor(private _service: SharedService) { }

  getDataFromService() {
    this._service.getWeatherData(this.cityName, this.countryName)
      .subscribe(
        result => {
          console.log('Service call result: ' + result);
          this.city = result.query.results.channel.location.city;
          this.region = result.query.results.channel.location.region;
          this.country = result.query.results.channel.location.country;
          this.date = result.query.results.channel.item.condition.date;
          this.text = result.query.results.channel.item.condition.text;
          this.temp = result.query.results.channel.item.condition.temp;
      },
      error => {
        console.log('Service error: ' + error);
      }
    );
  }

  ngOnInit() {
  }

}
