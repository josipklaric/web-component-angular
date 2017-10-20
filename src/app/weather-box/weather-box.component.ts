import { Component, OnInit, Input, EventEmitter, OnChanges, AfterViewInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { WeatherBarComponent } from './../weather-bar/weather-bar.component';
import { WeatherSearchComponent } from './../weather-search/weather-search.component';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styles: []
})
export class WeatherBoxComponent implements OnInit, OnChanges, AfterViewInit {

  cityName: string = '';
  countryName: string = '';
  city: string = '';
  state: string = '';
  region: string = '';
  country: string = '';
  date: string = '';
  text: string = '';
  temp: string = '';
  private _searchData: any;

  constructor(public _sharedService: SharedService, private http: Http) {
    console.log('>> weather-box -> constructor -> _sharedService: ' + _sharedService);
   }

  @ViewChild('weatherBox') el: ElementRef;

  @Input() searchData: string;

  // @Input() set searchData(data: any) {
  //      this.cityName = data.city;
  //      this.getDataFromService();
  // }
  // @Input() set searchData(value: any) {
  //   this._searchData = value;
  //   // this.cityName = value.city;
  // }

  // get searchData(): any {
  //   return this._searchData;
  // }

  getDataFromService() {
    this._sharedService.getWeatherData(this.city, this.country)
      .subscribe(
        result => {
          this.city = result.query.results.channel.location.city;
          this.region = result.query.results.channel.location.region;
          this.country = result.qquery.results.channel.location.country;
          this.date = result.query.results.channel.item.condition.date;
          this.text = result.query.results.channel.item.condition.text;
          this.temp = result.query.results.channel.item.condition.temp;
      },
      error => {
        console.log('Service error: ' + error);
      }
    );
  }

  updateWeatherBar(data: any) {
    console.log('>> weather-box -> updateWeatherBar called -> arg: ' + JSON.stringify(data));
    // if(this.parentElement.parentElement.parentElement.tagName == "APP-WEATHER-WEB-COMP") {
    this._sharedService.broadcast('weatherChange', { 'city': this.cityName, 'temp': data.detail.temperature });
      // this.http.get('http://www.google.com');
    // }
  }
  // searchDataChanged(data: any) {
  //   console.log('>> weather-box -> searchDataChanged -> ' + data);
  //   this.searchData = data;
  // }
  ngAfterViewInit() {
    console.log('>> weather-box -> ngAfterViewInit -> ' + this.el.nativeElement.tagName);
    this.el.nativeElement.addEventListener('contentChanged', this.updateWeatherBar.bind(this));
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('>> weather-box -> ngOnChanges -> changes: ' + JSON.stringify(changes));
    this.cityName = changes.searchData.currentValue;
  }
  ngOnInit() {
  }

}
