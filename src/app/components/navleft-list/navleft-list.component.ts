import { Component } from '@angular/core';
import { NavleftService } from 'src/app/services/navbar/navleft.service';
import { NavleftData } from 'src/app/services/navbar/navleftmodel';

@Component({
  selector: 'app-navleft-list',
  templateUrl: './navleft-list.component.html',
  styleUrls: ['./navleft-list.component.css']
})
export class NavleftListComponent {

  navleftData: NavleftData[] = []

  constructor(private navleftService: NavleftService){}
  
  ngOnInit(): void {
    this.navleftService.getData()
    .subscribe({
      next: (navleftData: NavleftData[]) => {
        this.navleftData = navleftData
        console.log(this.navleftData)
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
