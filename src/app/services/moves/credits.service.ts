import { Injectable } from '@angular/core';
import { Credits } from './credit';
import { HttpClient } from '@angular/common/http';
import { CreditData } from './creditmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  private CreditsUrl: string = Credits.serverUrl

  constructor(private http: HttpClient) { }

  public getData():Observable<CreditData[]>{
    return this.http.get<CreditData[]>(`${this.CreditsUrl}`)
  }
}