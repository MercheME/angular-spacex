import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { Launch } from '../../interfaces/launch';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'launch-by-page',
  templateUrl: './launch-by-page.component.html'
})
export class LaunchByPageComponent implements OnInit{

  public launch!: Launch;

  constructor (
    private spaceXService: SpacexService,
    private activateRoute: ActivatedRoute
  ) {}


  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( params => this.spaceXService.getLaunchById( params['id'] ))
      )
      .subscribe( launch => {
        this.launch = launch;
      });
  }

}
