import { Injectable } from '@angular/core';
import { Card } from './card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardData } from './cardmodel';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  private CardUrl: string = Card.serverUrl

  constructor(private http: HttpClient) { }

  public getData():Observable<CardData[]>{
    return this.http.get<CardData[]>(`${this.CardUrl}`)
  }
}