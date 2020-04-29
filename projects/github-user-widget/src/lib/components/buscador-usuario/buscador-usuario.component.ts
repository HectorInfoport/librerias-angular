import { Component } from '@angular/core';

@Component({
  selector: 'ip-buscador-usuario',
  templateUrl: './buscador-usuario.component.html',
  styles: []
})
export class BuscadorUsuarioComponent {
  textoBusqueda = '';
  buscando: boolean;

  buscar(key: any) {
    console.log(key);
    this.buscando = false;
    if (key.keyCode === 13) {
      // vamos a buscar
      this.buscando = true;
    }
  }
}
