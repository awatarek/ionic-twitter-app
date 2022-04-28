import { Component, OnInit } from '@angular/core';
import { faker } from "@faker-js/faker";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('1s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
      ]
    )
  ]
})
export class Tab1Page implements OnInit{
  public users: {
    name: String,
    nick: String,
    photo: String,
    timeOfCreation: Date,
    text: String,
    likeNumber: number,
    shareNumber: number,
    commentNumber: number
  }[] = [];

  constructor() {}

  ngOnInit(){
    for(let i = 0; i < 10; i++){
      this.users.push({name: faker.name.firstName(), 
        nick: faker.name.firstName(),photo: faker.image.avatar(), timeOfCreation: faker.date.past(), text: faker.lorem.paragraph(),
        likeNumber: faker.datatype.number({min:0, max: 500}), shareNumber: faker.datatype.number({min:0, max: 500}), 
        commentNumber: faker.datatype.number({min:0, max: 500})});
    }
    }
}
