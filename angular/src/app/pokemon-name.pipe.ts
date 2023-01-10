import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  transform(value?: string, ...args: unknown[]): string {
    if (value) {
      return value[0].toUpperCase() + value.substring(1);
    }
    return '';
  }
}
