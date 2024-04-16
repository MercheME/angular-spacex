import { Component, Input, OnInit } from '@angular/core';
import { Rocket } from '../../interfaces/rocket';

@Component({
  selector: 'table-rockets',
  templateUrl: './table-rockets.component.html',
  styleUrl: './table-rockets.component.css'
})
export class TableRocketsComponent implements OnInit {

  @Input()
  public rocketsList: Rocket[] = [];

  ngOnInit(): void {
    console.log( this.rocketsList );
  }


}
