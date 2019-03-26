import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {

  private _eventBus: Subject<BroadcastEvent>;
  yahooUrl1 = "https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=";
  yahooUrl2 = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='";
  yahooUrl3 = "') and u='c'";

  constructor(private _http: Http) {
    this._eventBus = new Subject<BroadcastEvent>();
  }

  broadcast(key: any, data?: any) {
    this._eventBus.next({key, data});
  }

  on<T>(key: any): Observable<T> {
    console.log('>> SharedService -> on<T> fired!');
    return this._eventBus.asObservable()
      .filter(event => event.key === key)
      .map(event => <T>event.data);
  }

  getWeatherData(city, country) {

    let queryText = city;
    if (country.length > 0) {
        queryText = city + ', ' + country;
    }
    console.log('>> getWeatherData -> queryText: ' + queryText);
    return this._http.get(this.yahooUrl1 + encodeURIComponent(this.yahooUrl2 + queryText + this.yahooUrl3))
        .map(response => {
            { return response.json(); }
        })
        .catch(error => Observable.throw(error.json()));
  }
}

interface BroadcastEvent {
  key: any;
  data?: any;
}

