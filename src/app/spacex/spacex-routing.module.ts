import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LaunchByPageComponent } from "./pages/launch-by-page/launch-by-page.component";
import { LaunchesPageComponent } from "./pages/launches-page/launches-page.component";
import { RocketsPageComponent } from "./pages/rockets-page/rockets-page.component";


const routes: Routes = [
  {
    path: 'launches',
    component: LaunchesPageComponent,
  },
  {
    path: 'rockets',
    component: RocketsPageComponent
  },
  {
    path: 'launches/:id',
    component: LaunchByPageComponent
  },
  {
    path: '**',
    redirectTo: 'launches'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class SpacexRoutingModule {}
