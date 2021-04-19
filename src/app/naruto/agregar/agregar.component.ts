import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  @Output() onNuevopersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.onNuevopersonaje.emit(this.nuevo);
    // this.personajes.push(this.nuevo)
    this.nuevo = { nombre: '', poder: 0 }
  }
}
