import { Component, OnInit } from '@angular/core';
import { POKEMONS } from 'src/mock-pokemon';
import { Pokemon } from 'src/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemon: MouseEvent) {
    if (event) {
      const index: number = +(event.target as HTMLInputElement).value;
      console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);
    }
  }
}
