import { Routes, RouterModule } from '@angular/router';
import { WeatherWebCompComponent } from './weather-web-comp/weather-web-comp.component';
import { WeatherComponent } from './weather/weather.component';

const ROUTES: Routes = [
    { path: '', redirectTo: '/weather', pathMatch: 'full' },
    { path: 'weather', component: WeatherComponent },
    { path: 'weather-web-comp', component: WeatherWebCompComponent }
];
export const ROUTING = RouterModule.forRoot(ROUTES);
