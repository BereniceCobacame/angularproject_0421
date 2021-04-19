import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = [];
  get personajes() {
    return this.naturoService.personajes
  }

  constructor(private naturoService: NarutoService) {
  }
}