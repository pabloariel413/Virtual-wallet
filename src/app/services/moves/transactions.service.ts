import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransferData } from './transactionsmodel';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  
  private TransactionUrl: string = Transaction.serverUrl

  constructor(private http: HttpClient) { }

  public getData():Observable<TransferData[]>{
    return this.http.get<TransferData[]>(`${this.TransactionUrl}`)
  }
}