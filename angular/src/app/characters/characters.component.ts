import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  public filter: string;
  public filteredPokemons: Pokemon[];

  constructor(public pokemonService: PokemonService, private router: Router) {
    this.filter = '';
    this.filteredPokemons = this.pokemonService.pokemons;
    this.pokemonService.getPokemons().subscribe(data => this.filteredPokemons = data.results);
  }

  public filterByName() {
    this.filteredPokemons = [];

    for (let pokemon of this.pokemonService.pokemons) {
      if (pokemon.name.toLowerCase().indexOf(this.filter) !== -1) {
        this.filteredPokemons.push(pokemon);
      }
    }
  }
}
