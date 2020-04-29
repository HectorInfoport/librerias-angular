import { NgModule } from '@angular/core';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BuscadorUsuarioComponent } from './components/buscador-usuario/buscador-usuario.component';
const COMPONENT = [UsuarioComponent, BuscadorUsuarioComponent];
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [COMPONENT],
  imports: [CommonModule, FormsModule],
  exports: [COMPONENT]
})
export class GithubUserWidgetModule {}
