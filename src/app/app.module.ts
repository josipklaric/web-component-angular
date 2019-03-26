import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
//import { WeatherNowComponent } from './weather-now/weather-now.component';
import { WeatherBoxComponent } from './weather-box/weather-box.component';
import { ROUTING } from './app.routing';
import { SharedService } from './shared.service';
import { WeatherBarComponent } from './weather-bar/weather-bar.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherWebCompComponent } from './weather-web-comp/weather-web-comp.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //WeatherNowComponent,
    WeatherBoxComponent,
    WeatherBarComponent,
    WeatherSearchComponent,
    WeatherWebCompComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
