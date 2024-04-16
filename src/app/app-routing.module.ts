import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'spaceX',
    loadChildren: () => import('./spacex/spacex.module').then( m => m.SpacexModule)
  },
  {
    path: '**',
    redirectTo: 'spaceX'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
