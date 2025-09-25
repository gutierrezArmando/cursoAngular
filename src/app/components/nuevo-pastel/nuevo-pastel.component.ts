import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-pastel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-pastel.component.html',
  styleUrl: './nuevo-pastel.component.css'
})
export class NuevoPastelComponent {

  @Output()
  eventChangeNombrePastel= new EventEmitter<string>();



  nombrePastel:string="";

  setNombrePastel(){
    console.log("El nuevo nombre es: " + this.nombrePastel);
    this.eventChangeNombrePastel.emit(this.nombrePastel);
  }

}
