import { Component, OnInit } from '@angular/core';
import { faker } from "@faker-js/faker";
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  public currentUser: any;
  public sectionName: string = "Główna";
  public sectionVisible: boolean = true;
  public addTweet: boolean = true;

  constructor(private router: Router, private menu: MenuController) { 
    this.router.events.subscribe((eve) =>{
      if(eve instanceof NavigationEnd){
        eve.url == "/explore" ? this.sectionVisible = false : this.sectionVisible = true;
        if(this.sectionVisible){
          switch(eve.url){
            case "/home":
              this.sectionName = "Główna";
              this.sectionVisible = true;
              this.addTweet = true;
              break;
            case "/notifications":
              this.sectionName = "Powiadomienia";
              this.sectionVisible = true;
              this.addTweet = true;
              break;
            case "/messages":
              this.sectionName = "Wiadomości";
              this.sectionVisible = true;
              this.addTweet = false;
              break;
            case "/explore":
              this.sectionVisible = false;
              this.addTweet = true;
              break;
          }
        }
      }
    })
  }

  ngOnInit() {
    this.currentUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      photo: faker.image.avatar(),
      nickname: faker.random.word(),
      followNumber: faker.datatype.number({min: 0, max: 1200}),
      followersNumber: faker.datatype.number({min: 0, max: 1200})
    }
  }

  public openMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
