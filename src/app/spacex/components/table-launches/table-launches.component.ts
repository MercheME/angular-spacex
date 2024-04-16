import { Component, Input, OnInit } from '@angular/core';

import { Launch } from '../../interfaces/launch';

@Component({
  selector: 'table-launches',
  templateUrl: './table-launches.component.html',
  styleUrl: './table-launches.component.css'
})

export class TableLaunchesComponent implements OnInit {

  @Input()
  public launchlist: Launch[] = [];


  ngOnInit(): void {
    console.log(this.launchlist);
  }

}
