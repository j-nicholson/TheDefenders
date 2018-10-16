import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './app-components/character/character.component';
import { PageNotFoundComponent } from './app-components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'character', component: CharacterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
