import { Component, Input, OnInit } from '@angular/core';
import { NavleftService } from 'src/app/services/navbar/navleft.service';
import { NavleftData } from 'src/app/services/navbar/navleftmodel';

@Component({
  selector: 'app-navleft-item',
  templateUrl: './navleft-item.component.html',
  styleUrls: ['./navleft-item.component.css']
})
export class NavleftItemComponent implements OnInit{

@Input() navleftData: NavleftData | undefined;

  ngOnInit(): void {
   console.log(this.navleftData)
  }
  
}