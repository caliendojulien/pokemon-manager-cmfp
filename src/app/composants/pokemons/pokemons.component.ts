import {Component} from '@angular/core';
import {Pokemon} from "../../modeles/Pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {

  public pokemons: Pokemon[] = [];

  constructor() {

    let bulbizarre = new Pokemon(
      1,
      'Bulbizarre',
      ["Plante", "Poison"],
      6.9,
      0.70,
      ["Graines"],
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    );
    this.pokemons.push(bulbizarre);
    this.pokemons.push(bulbizarre);
    this.pokemons.push(bulbizarre);
    this.pokemons.push(bulbizarre);
    this.pokemons.push(bulbizarre);
    this.pokemons.push(bulbizarre);
  }
}
