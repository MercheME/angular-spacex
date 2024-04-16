import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacexRoutingModule } from './spacex-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LaunchByPageComponent } from './pages/launch-by-page/launch-by-page.component';
import { LaunchesPageComponent } from './pages/launches-page/launches-page.component';
import { RocketsPageComponent } from './pages/rockets-page/rockets-page.component';

import { CardLaunchComponent } from './components/card-launch/card-launch.component';
import { TableLaunchesComponent } from './components/table-launches/table-launches.component';
import { TableRocketsComponent } from './components/table-rockets/table-rockets.component';


@NgModule({
  declarations: [
    CardLaunchComponent,
    LaunchByPageComponent,
    LaunchesPageComponent,
    RocketsPageComponent,
    TableLaunchesComponent,
    TableRocketsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SpacexRoutingModule,
  ]
})


export class SpacexModule { }
