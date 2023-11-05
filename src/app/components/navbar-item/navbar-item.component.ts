import { Component, Input, OnInit } from '@angular/core';
import { NavbarData } from 'src/app/services/navbar/navbarmodel';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit{

  @Input() navbarData: NavbarData | undefined;

  ngOnInit(): void {
      console.log(this.navbarData)
  }
}
