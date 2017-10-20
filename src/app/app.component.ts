import { Component } from '@angular/core';
import { ClimaModel } from './models/clima-model';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  datos: any = [] ;
  apiKey = '560e1653b194e99b215c46449c9eb51d' ;
  constructor(private http: Http) {
  }

  getDetalle( ciudad: string) {
    this.llamadaApi(ciudad).subscribe(
      (response) => this.datos = response,
      (error) => console.log(error)
    );
  }

  llamadaApi(ciudad: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + ciudad + '&APPID=' + this.apiKey).map(
      (response: Response) => {
        this.datos = response.json();
        console.log(this.datos);
        return this.datos;
      }
    );
  }
}
