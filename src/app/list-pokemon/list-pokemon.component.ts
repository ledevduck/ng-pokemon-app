import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;
}
