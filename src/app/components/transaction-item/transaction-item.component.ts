import { Component, Input } from '@angular/core';
import { TransactionsService } from 'src/app/services/moves/transactions.service';
import { TransferData } from 'src/app/services/moves/transactionsmodel';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent {

  @Input() transferData: TransferData | undefined;
}