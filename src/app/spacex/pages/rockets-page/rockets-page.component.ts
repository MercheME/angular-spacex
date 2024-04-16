import { Component, Input, OnInit } from '@angular/core';

import { Rocket } from '../../interfaces/rocket';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'rockets-page',
  templateUrl: './rockets-page.component.html'
})

export class RocketsPageComponent implements OnInit {

  public rocketsList: Rocket[] = [];
  public maxWeightRocket! : Rocket;

  constructor ( private spacexSevice : SpacexService) {}

  @Input()
  public rocketList: Rocket[] = [];

  ngOnInit(): void {
    this.spacexSevice.getRockets()
      .subscribe( data => {
        this.rocketsList = data;
        this.maxWeightRocket = this.getMaxWeightRocket( data );
      })
  }

  getMaxWeightRocket( rockets: Rocket[] ): Rocket {
    let maxWeightRocket: Rocket = rockets[0];
    for (let i = 1; i < rockets.length; i++) {
      if (rockets[i].mass.kg > maxWeightRocket.mass.kg){
        maxWeightRocket = rockets[i]
      }
    }
    return maxWeightRocket;
  }

}
