import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonRoot, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public pokemon?: PokemonRoot;

  constructor(private route: ActivatedRoute, public pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id: number = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.pokemonService.getPokemon(id).subscribe(data => this.pokemon = data);
    });
  }
}
