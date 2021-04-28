import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { DublinBikeStation } from '../models/dublinbike';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DublinbikeService {

  constructor(private http: HttpClient) { }

  getStations(): Observable<DublinBikeStation[]> {
  
    const contract_name = `dublin`;
    const api_key = environment.api_key
    const endpointUrl = `https://api.jcdecaux.com/vls/v1/stations?contract=${contract_name}&apiKey=${api_key}`;
  
    return this.http.get<DublinBikeStation[]>(endpointUrl).pipe();
  }


  getStation(stationId: number): Observable<DublinBikeStation> {
  
    const contract_name = `dublin`;
    const api_key = environment.api_key
    const endpointUrl = `https://api.jcdecaux.com/vls/v1/stations/${stationId}?contract=${contract_name}&apiKey=${api_key}`;
  
    return this.http.get<DublinBikeStation>(endpointUrl).pipe();
  }



  
}
