import { Component, OnInit } from '@angular/core';
import { HEROES } from '../hero/HeroList';
import { TempServiceService } from '../temp-service.service';
 
@Component({
  selector: 'app-hero-list',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `
})
export class HeroListComponent {
  heroes = HEROES;

  constructor(heroService: TempServiceService) {
    this.heroes = heroService.getHeroes();
  }
}

