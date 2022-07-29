import { Component } from '@angular/core';

export interface Costo {
  nombre: string;
  costo: string;
}

const COSTOS_DATA: Costo[] = [
    {nombre: 'Lavado de pelo', costo: '300'},
    {nombre: 'Corte de pelo', costo: '700'},
    {nombre: 'Tintura de pelo', costo: '1200'}

]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  disable = true;
  mensaje = 'Ocultar';

  dataSource = COSTOS_DATA;

  mostrarTabla() {
    if (this.disable === false) {
      this.disable = true;
      this.mensaje = 'Ocultar';
    } else {
      this.disable = false;
      this.mensaje = 'Mostrar';
    }
  }

}
