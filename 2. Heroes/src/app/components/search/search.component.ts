import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino:string = "";
  heroes:Heroe[] = [];

  constructor ( private _activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                private _router:Router ) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

  verHeroe(nombre:string) {
    this._router.navigate(["heroe", nombre]);
  }

}
