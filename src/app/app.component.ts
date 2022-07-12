import { Component, OnInit } from '@angular/core';
import { POKEMONS } from 'src/mock-pokemon';
import { Pokemon } from 'src/pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de pokemons</h1>`
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
