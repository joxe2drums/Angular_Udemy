import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:Heroe = undefined;

  constructor ( private _activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                private _router:Router ) {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      if (this.heroe == undefined) {
        this._router.navigate(["heroes"]);
      }
    });
  }

}
