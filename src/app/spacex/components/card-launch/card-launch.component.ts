import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Launch } from '../../interfaces/launch';

@Component({
  selector: 'card-launch',
  templateUrl: './card-launch.component.html',
  styleUrl: './card-launch.component.css'
})
export class CardLaunchComponent implements OnInit {

  constructor (private router: Router) {}

  @Input()
  public launch! : Launch;

  ngOnInit(): void {
    if( !this.launch ) throw new Error('Launch property is required');
  }

  goBack(): void {
    this.router.navigateByUrl('/launches')
  }

}
