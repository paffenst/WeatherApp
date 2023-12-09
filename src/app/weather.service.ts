import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=39eb4b2c48aea3ddbfcbe35d9184d375&units=imperial');
  }
}
