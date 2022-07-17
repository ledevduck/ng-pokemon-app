import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html'
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
