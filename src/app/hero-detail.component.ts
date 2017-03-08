import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {

    /*
    Do I need to unsubscribe?
    The Router manages the observables it provides and localizes the subscriptions. The subscriptions are cleaned up when the component is destroyed, protecting against memory leaks, so we don't need to unsubscribe from the route params Observable.
  */
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id'])) // If the user re-navigates to this component while a getHero request is still inflight, switchMap cancels that old request before calling HeroService.getHero again.
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    // Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.// https://angular.io/docs/ts/latest/api/router/index/CanDeactivate-interface.html
    this.location.back();
  }

}

