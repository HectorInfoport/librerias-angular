import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { USUARIOAPI } from '../../constants/usuario';
import { BuscadorUsuarioService } from '../../services/buscador-usuario.service';

@Component({
  selector: 'ip-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  @Input() busqueda: string;
  usuario: Usuario;

  constructor(private buscador: BuscadorUsuarioService) {}

  ngOnInit() {
    if (this.busqueda === undefined || this.busqueda === null || this.busqueda === '') {
      console.log('Usando la constante');
      this.usuario = USUARIOAPI;
    } else {
      console.log('Buscando en la api' + this.busqueda);

      this.buscador.obtenerDatosUsuario(this.busqueda).then((data: Usuario) => {
        this.usuario = data;
      });
    }
  }
}
