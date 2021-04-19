import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';

@Injectable()
export class NarutoService {
    private _personajes: Personaje[] = [
        {
            nombre: 'Naruto',
            poder: 1500
        },
        {
            nombre: 'Sasuke',
            poder: 1800
        },
        {
            nombre: 'Sakura',
            poder: 1000
        },
    ]

    get personajes():Personaje[]{
        return [...this._personajes]
    }

    constructor() {
        console.log('Servicio inicializado')
    }
}