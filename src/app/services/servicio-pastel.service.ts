import { Injectable } from '@angular/core';
import { Pastel } from '../interfaces/pastel';

@Injectable({
  providedIn: 'root'
})
export class ServicioPastelService {

  arrayPasteles:Pastel[]=[
    {
      nombrePastel: 'Pastel Chocolate',
      imagen: 'assets/pastelChocolate.jpeg',
      descripcion: 'Chocolate: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero id totam tempore modi at atque',
      ingredientes:['harina', 'huevo', 'cocoa']
    },
    {
      nombrePastel: 'Pastel Fresa',
      imagen: 'assets/pastelFresa.jpeg',
      descripcion: 'Fresa: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero id totam tempore modi at atque',
      ingredientes:['harina', 'huevo', 'fresas']
    }
  ];
  constructor() { }

  getPasteles():Pastel[]{
    return this.arrayPasteles;
  }
}
