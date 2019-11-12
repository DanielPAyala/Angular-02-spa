import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _serviceHeroe: HeroesService, private _activatedRoute: ActivatedRoute, private router: Router) {
    _activatedRoute.params.subscribe(params => {
      this.termino = params['texto'];
      this.heroes = _serviceHeroe.buscarHeroes(params['texto']);
    })
  }

  ngOnInit() {
  }

  verHeroe(idx:number) {
    this.router.navigate(['/heroe', idx]);
  }

}
