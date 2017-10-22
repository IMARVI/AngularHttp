import { Component, OnInit } from '@angular/core';
import { ClimaModel } from './models/clima-model';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  forecast: any = [];
  weather: any = [];
  apiKey: string = '560e1653b194e99b215c46449c9eb51d' ;
  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getDetalle("Mexico");
  }

  getDetalle( ciudad: string) {
    this.getForecast(ciudad).subscribe(
      (response) => this.forecast = response,
      (error) => console.log(error)
    );
    this.getWeather(ciudad).subscribe(
      (response) => this.weather = response,
      (error) => console.log(error)
    );
  }

  getWeather(ciudad: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&units=metric&APPID=' + this.apiKey).map(
      (response: Response) => {
        this.weather = response.json();
        console.log(this.weather);
        return this.weather;
      })
  }

  getForecast(ciudad: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + ciudad + '&units=metric&APPID=' + this.apiKey).map(
      (response: Response) => {
        this.forecast = response.json();
        console.log(this.forecast);
        return this.forecast;
      }
    );
  }
}
