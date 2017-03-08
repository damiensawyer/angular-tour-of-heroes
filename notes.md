# Things to learn / revisit
- setting up better router links  ```<a routerLink="/heroes">Heroes</a>``` [docs here](https://angular.io/docs/ts/latest/guide/router.html#!#link-parameters-array).
- What is the + in +params for? 
```
  this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id'])) // If the user re-navigates to this component while a getHero request is still inflight, switchMap cancels that old request before calling HeroService.getHero again.
      .subscribe(hero => this.hero = hero);
```
