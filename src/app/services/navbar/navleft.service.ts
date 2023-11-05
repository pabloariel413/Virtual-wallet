import { Injectable } from '@angular/core';
import { Navleft } from './navleft';
import { HttpClient } from '@angular/common/http';
import { NavleftData } from './navleftmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavleftService {

  private NavleftUrl: string = Navleft.serverUrl

  constructor(private http: HttpClient) { }

  public getData():Observable<NavleftData[]>{
    return this.http.get<NavleftData[]>(`${this.NavleftUrl}`)
  }
  
}