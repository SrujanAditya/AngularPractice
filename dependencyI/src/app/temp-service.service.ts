import { Injectable } from '@angular/core';
import { HEROES } from './hero/HeroList';

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {

  constructor() { }
  getHeroes() { return HEROES; }
}
