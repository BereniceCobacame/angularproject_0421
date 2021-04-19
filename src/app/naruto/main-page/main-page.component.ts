import { Component } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // get personajes():Personaje[]{
  //   return this.narutoService.personajes
  // }

  // agregarNuevoPersonaje( personaje: Personaje){
  //   this.personajes.push(personaje)
  // }

  constructor(){
  }
}