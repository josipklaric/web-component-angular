import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: []
})
export class WeatherComponent implements OnInit {

  constructor() { }

  currentSearch: any;

  searchDataChanged(searchData: any) {
    // console.log('>> weather -> searchDataChanged -> searchData: ' + JSON.stringify(searchData));
    this.currentSearch = searchData;
  }

  ngOnInit() {
  }

}
