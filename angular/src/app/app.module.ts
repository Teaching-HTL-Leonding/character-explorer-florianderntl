import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PokemonNamePipe } from './pokemon-name.pipe';
import { FormsModule } from '@angular/forms';

export const BASE_URL = new InjectionToken<string>('BaseUrl');

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    PokemonNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: BASE_URL, useValue: 'https://pokeapi.co/api/v2' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
