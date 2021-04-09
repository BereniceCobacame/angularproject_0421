import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  personajes: string[] = ['Naruto', 'Sasuke', 'Itachi', 'Pain'];
  personajesb: string[] = [];
  bor: string = '';
  borrarPersonaje() {
    this.bor = this.personajes.shift() || '';
    if (this.bor !== '')
      this.personajesb.push(this.bor);
  }
}