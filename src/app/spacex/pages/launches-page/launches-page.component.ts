import { Component, OnInit } from '@angular/core';
import { Launch } from '../../interfaces/launch';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'launches-page',
  templateUrl: './launches-page.component.html'
})
export class LaunchesPageComponent implements OnInit {

  public launchesList: Launch[] = [];
  public upComingLaunchesList: Launch[] = [];

  constructor ( private spacexService: SpacexService ) {}

  ngOnInit(): void {
    this.spacexService.getLaunches()
      .subscribe( data => {
        this.launchesList = data;
      })

    this.spacexService.getUpcomingLaunches()
      .subscribe( data => {
        this.upComingLaunchesList = data;
      })
  }




}
