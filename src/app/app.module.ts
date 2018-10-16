import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelDataService } from './app-service/marvel-data.service';
import { MaterialModule } from './app-modules/material-module/material.module';
import { CharacterComponent } from './app-components/character/character.component';
import { PageNotFoundComponent } from './app-components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [MarvelDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
