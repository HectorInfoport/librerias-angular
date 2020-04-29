import { Injectable } from '@angular/core';
import * as api from 'proyecto-1b-api-github';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class BuscadorUsuarioService {
  constructor() {}

  obtenerDatosUsuario(usuario: string): Promise<any> {
    return new Promise((resolve: any) => {
      api
        .obtenerDatosDeUsuario(usuario)
        .then((data: Usuario) => {
          resolve(data);
        })
        .catch((error: any) => {
          resolve(error);
        });
    });
  }
}
