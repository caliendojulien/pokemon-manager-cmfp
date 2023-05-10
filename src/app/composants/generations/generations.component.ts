import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent {

  public generations: string[]= [];

  constructor() {
    this.generations.push("Génération I");
    this.generations.push("Génération II");
    this.generations.push("Génération III");
    this.generations.push("Génération IV");
    this.generations.push("Génération V");
    this.generations.push("Génération VI");
    this.generations.push("Génération VII");
  }
}
