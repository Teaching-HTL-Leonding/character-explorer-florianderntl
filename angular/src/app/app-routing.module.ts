import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
