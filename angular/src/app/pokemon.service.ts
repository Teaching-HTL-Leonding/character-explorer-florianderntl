import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BASE_URL } from './app.module';

export interface Pokemon {
  id: number,
  name: string,
  isFavorite: boolean,
}

export interface PokemonListRoot {
  results: [
    Pokemon
  ]
}

export interface PokemonRoot {
  id: number,
  name: string,
  sprites: {
    back_default: string,
    front_default: string,
  },
  height: number,
  weight: number,
  abilities: [
    {
      ability: {
        name: string,
      },
    }
  ],
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons: Pokemon[];

  constructor(private httpClient: HttpClient, @Inject(BASE_URL) private baseUrl: string) {
    this.pokemons = [];
    this.loadPokemons();
  }

  private loadPokemons(): void {
    let tmp = localStorage.getItem('pokemons');
    if (tmp) {
      this.pokemons = JSON.parse(tmp);
    } else {
      this.getPokemons().subscribe(data => {
        let id = 1;
        for (let pokemon of data.results) {
          pokemon.id = id;
          pokemon.isFavorite = false;
          this.pokemons.push(pokemon);
          id += 1;
        }
        console.log(this.pokemons);
      });
    }
  }

  public getPokemons(): Observable<PokemonListRoot> {
    return this.httpClient.get<PokemonListRoot>(`${this.baseUrl}/pokemon?limit=100`);
  }

  public getPokemon(id: number): Observable<PokemonRoot> {
    return this.httpClient.get<PokemonRoot>(`${this.baseUrl}/pokemon/${id}`);
  }

  public getFavorites(): Pokemon[] {
    let poks = [];

    for (let pokemon of this.pokemons) {
      if (pokemon.isFavorite) {
        poks.push(pokemon);
      }
    }

    return poks;
  }

  public saveFavorites() {
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
  }
}
