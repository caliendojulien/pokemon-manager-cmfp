import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonComponent } from './composants/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    GenerationsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
