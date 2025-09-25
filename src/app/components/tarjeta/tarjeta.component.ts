import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pastel } from '../../interfaces/pastel';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input()
  pastel!:Pastel;

  @Output()
  productSelected= new EventEmitter<number>();

  @Input()
  indice:number=0;

  getNombreProducto(){
    this.productSelected.emit(this.indice);
  }
}
