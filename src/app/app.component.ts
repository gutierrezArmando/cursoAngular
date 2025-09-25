import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaComponent } from "./components/tarjeta/tarjeta.component";
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarjetaComponent, TarjetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cursoAngular';
}
