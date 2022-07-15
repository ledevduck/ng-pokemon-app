import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.router.snapshot.paramMap.get('id');
  }

}
