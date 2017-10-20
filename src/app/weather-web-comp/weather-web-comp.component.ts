import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather-web-comp',
  templateUrl: './weather-web-comp.component.html',
  styles: []
})
export class WeatherWebCompComponent implements OnInit, AfterViewInit, OnChanges {

  // @ViewChild('weatherBox') el: ElementRef;

  constructor(private rd: Renderer2, private _elementRef: ElementRef) {
    // this._elementRef.nativeElement;
    console.log('>> weather-web-comp -> constructor -> ' + this._elementRef.nativeElement.addEventListener('load', console.log));

    rd.listen(_elementRef.nativeElement, 'load', (event) => {
      console.log('>> weather-web-comp -> constructor -> nativeElement load event fired');
    });
  }

  currentSearch: any;

  searchDataChanged(searchData: any) {
    console.log('>> weather-web-comp -> searchDataChanged -> searchData: ' + JSON.stringify(searchData));
    this.currentSearch = searchData;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('>> weather-web-comp -> ngOnChanges -> changes: ' + changes);

  }

  ngAfterViewInit() {
    // console.log(this.rd);
    // console.log('>> weather-web-comp -> ngAfterViewInit -> ' + this.el);
    // this.el.nativeElement.focus();
    // console.log('>> weather-web-comp -> ngAfterViewInit -> ' + this.el);
  }
}
