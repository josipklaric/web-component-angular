import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-web-comp',
  templateUrl: './weather-web-comp.component.html',
  styles: []
})
export class WeatherWebCompComponent implements OnInit {

  constructor() { }

  currentSearch: any;

  searchDataChanged(searchData: any) {
    console.log('>> weather-web-comp -> searchDataChanged -> searchData: ' + JSON.stringify(searchData));
    this.currentSearch = searchData;
  }

  ngOnInit() {
  }
}
