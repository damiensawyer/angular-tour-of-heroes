import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  // Had a debate about using Promises with async / await. Reason to not use it is that the transpiled JS is messy.
  // async getHeroes(): Promise<void> {
  //  this.heroes = await this.heroService.getHeroes();
  // }

  //  async ngOnInit(): Promise<void> {
  //   await this.getHeroes();
  // }

 getHeroes(): void {
   this.heroService.getHeroes().then(r => this.heroes=r);
 }

 ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
