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
    this.currentSearch = searchData;
  }

  ngOnInit() {
  }
}
