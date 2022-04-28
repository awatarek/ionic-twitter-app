import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-add-badge',
  templateUrl: './add-badge.component.html',
  styleUrls: ['./add-badge.component.scss'],
})


export class AddBadgeComponent {
  @Input()
  public addTweet: boolean = true;

  constructor() { 
    console.log(this.addTweet);
  }
}
