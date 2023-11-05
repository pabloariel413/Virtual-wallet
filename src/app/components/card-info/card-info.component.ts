import { Component, Input } from '@angular/core';
import { CardData } from 'src/app/services/card/cardmodel';


@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {

  @Input() cardData: CardData | undefined;
}
