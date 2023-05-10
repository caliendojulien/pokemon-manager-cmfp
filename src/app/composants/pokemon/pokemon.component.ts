import {Component, Input} from '@angular/core';
import {Pokemon} from "../../modeles/Pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  @Input() public pokemon!: Pokemon;

}
