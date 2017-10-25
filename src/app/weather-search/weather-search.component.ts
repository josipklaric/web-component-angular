import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styles: []
})
export class WeatherSearchComponent implements OnInit {

  cityName: string = 'Zagreb';
  countryName: string = '';
  temp: number = 0;

  constructor() { }

  @Output() onSearchDataChange = new EventEmitter<any>();

  onBlur(input: HTMLInputElement) {
    this.onSearchDataChange.emit(this.cityName);
  }
  
  ngOnInit() {
  }

}
