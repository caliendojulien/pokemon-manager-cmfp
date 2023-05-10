import {Component, Inject} from '@angular/core';
import {Pokemon} from "../../modeles/Pokemon";
import {Observable} from "rxjs";
import {ApiPokemons} from "../../modeles/ApiPokemons";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {

  public pokemons$: Observable<ApiPokemons>;

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {
    this.pokemons$ = this.http.get<ApiPokemons>('https://pokeapi.co/api/v2/pokemon');
  }
}
