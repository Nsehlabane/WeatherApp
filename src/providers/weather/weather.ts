import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
appid='&&appid=86a8a42abb12b6caf02cd96daedaa678';


url='https://api.openweathermap.org/data/2.5/weather?q='
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  
  }
  getWeather(city:string){
    return this.http.get(this.url+city+',za'+this.appid);
   }
}


