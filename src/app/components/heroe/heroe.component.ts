import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
    private _service: HeroesService
  ) {
    _activatedRoute.params.subscribe(params => {
      this.heroe = _service.getHeroe(params['id']);
      console.log(this.heroe);
    })
  }
}
