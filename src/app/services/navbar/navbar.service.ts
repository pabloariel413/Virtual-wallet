import { Injectable } from '@angular/core';
import { NavbarData } from './navbarmodel';
import { HttpClient } from '@angular/common/http';
import { Navbar } from './navbar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  
  private NavbarUrl: string = Navbar.serverUrl

  constructor(private http: HttpClient) { }

  public getData():Observable<NavbarData[]>{
    return this.http.get<NavbarData[]>(`${this.NavbarUrl}`)
  }
}