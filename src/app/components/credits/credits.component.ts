import { Component } from '@angular/core';
import { CreditData } from 'src/app/services/moves/creditmodel';
import { CreditsService } from 'src/app/services/moves/credits.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent {
  creditData: CreditData[] = []

  constructor(private creditsService : CreditsService){}
  
  ngOnInit(): void {
    this.creditsService.getData()
    .subscribe({
      next: (creditData: CreditData[]) => {
        this.creditData = creditData
        console.log(this.creditData)
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
