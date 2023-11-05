import { Component, Input } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { NavbarData } from 'src/app/services/navbar/navbarmodel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  navbarData: NavbarData[] = []

  constructor(private navbarService: NavbarService){}
  
  ngOnInit(): void {
    this.navbarService.getData()
    .subscribe({
      next: (navbarData: NavbarData[]) => {
        this.navbarData = navbarData
        console.log(this.navbarData)
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
