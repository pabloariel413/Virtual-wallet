import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/services/moves/transactions.service';
import { TransferData } from 'src/app/services/moves/transactionsmodel';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transferData: TransferData[] = []

  constructor(private transactionsService : TransactionsService){}
  
  ngOnInit(): void {
    this.transactionsService.getData()
    .subscribe({
      next: (transferData: TransferData[]) => {
        this.transferData = transferData
        console.log(this.transferData)
      },
      error: (error:any) => {
        console.error(error)
      },
      complete: () => {
        console.log('complete')
      }
    })
  }
}
