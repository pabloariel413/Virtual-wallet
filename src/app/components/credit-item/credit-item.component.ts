import { Component, Input } from '@angular/core';
import { CreditData } from 'src/app/services/moves/creditmodel';

@Component({
  selector: 'app-credit-item',
  templateUrl: './credit-item.component.html',
  styleUrls: ['./credit-item.component.css']
})
export class CreditItemComponent {

  @Input() creditData: CreditData | undefined;
}
