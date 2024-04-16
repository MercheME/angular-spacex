import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Launch } from '../interfaces/launch';
import { Rocket } from '../interfaces/rocket';

@Injectable({
  providedIn: 'root'
})

export class SpacexService {

  private apiUrlV5: string = 'https://api.spacexdata.com/v5';
  private apiUrlV4: string = 'https://api.spacexdata.com/v4';

  constructor( private http: HttpClient ) {}

  getLaunches(): Observable<Launch[]> {
    const url = `${ this.apiUrlV5 }/launches`;
    return this.http.get<Launch[]>( url );
  }

  getUpcomingLaunches(): Observable<Launch[]> {
    const url = `${ this.apiUrlV5 }/launches/upcoming`;
    return this.http.get<Launch[]>( url );
  }

  getLaunchById( id: string ){
    const url = `${ this.apiUrlV5 }/launches/${ id }`;
    return this.http.get<Launch>( url );
  }

  getRockets(): Observable<Rocket[]> {
    const url = `${ this.apiUrlV4 }/rockets`;
    return this.http.get<Rocket[]>( url );
  }

}
