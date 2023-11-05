import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card/card.service';
import { CardData } from 'src/app/services/card/cardmodel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardData: CardData[] = []

  constructor(private cardService : CardService){}
  
  ngOnInit(): void {
    this.cardService.getData()
    .subscribe({
      next: (cardData: CardData[]) => {
        this.cardData = cardData
        console.log(this.cardData)
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
