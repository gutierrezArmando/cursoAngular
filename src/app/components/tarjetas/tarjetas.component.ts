import { Component } from '@angular/core';
import { TarjetaComponent } from "../tarjeta/tarjeta.component";
import { Pastel } from '../../interfaces/pastel';
import { FormsModule } from '@angular/forms';
import { NuevoPastelComponent } from "../nuevo-pastel/nuevo-pastel.component";
import { ServicioPastelService } from '../../services/servicio-pastel.service';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [TarjetaComponent, FormsModule],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {
  nombre:string="";
  descripcion:string="";
  nombreImagen:string="";

  indiceSeleccionado:number=0;

  contieneNombre:boolean=true;
  contieneDescripcino:boolean=true;
  contieneImagen:boolean=true;

  pasteles:Pastel[]=[
    {
      nombrePastel: 'Pastel Chocolate',
      imagen: 'assets/pastelChocolate.jpeg',
      descripcion: 'Chocolate: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero id totam tempore modi at atque',
      ingredientes:[ 'cocoa','leche condensada', 'harina']
    },
    {
      nombrePastel: 'Pastel Fresa',
      imagen: 'assets/pastelFresa.jpeg',
      descripcion: 'Fresa: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero id totam tempore modi at atque',
      ingredientes:['fresa', 'queso crema', 'royal']
    },
  ];

  constructor(private servicioPastel:ServicioPastelService){}

  seccionCrearVisible:boolean=false;

  flipSection(){
    this.seccionCrearVisible=!this.seccionCrearVisible;
  }

  agregarProducto(){
    this.contieneNombre=this.nombre.length>0?true:false;
    this.contieneDescripcino=this.descripcion.length>0?true:false;
    this.contieneImagen=this.descripcion.length>0?true:false;

    if(!this.contieneNombre||!this.contieneDescripcino||!this.contieneImagen)
      return;

    this.pasteles.push({
      nombrePastel: this.nombre,
      imagen: "assets/"+this.nombreImagen + ".jpeg",
      descripcion: this.descripcion,
      ingredientes:[]
    });
    this.flipSection();
  }


  getPasteles():Pastel[]{
    return this.servicioPastel.getPasteles();
  }

  obtenerNombreProducto(indiceRecuperado:number){
    console.log("El nombre recuperado es: "+indiceRecuperado);
    this.indiceSeleccionado=indiceRecuperado;
  }
}
