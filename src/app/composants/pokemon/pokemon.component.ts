import {Component, Inject, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../modeles/Pokemon";
import {Pokemons} from "../../modeles/Pokemons";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit{

  @Input() public pokemon!: Pokemons;
  public leResultatdeLurl$!: Observable<Pokemon>;

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.leResultatdeLurl$ = this.http.get<Pokemon>(this.pokemon.url);
  }

}
