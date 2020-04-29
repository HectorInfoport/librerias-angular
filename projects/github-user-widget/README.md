# LIbrería GithubUserWidget

Muestra la información de un usuario de Github haciendo uso de la librería de la API.La librería está desarrollada en Angular.

# Instrucciones

Son las siguientes:

## Instalación

`npm install github-user-widget`

## Configuracion

En el app.module.ts (por defecto), tenemos que importar el módulo de la librería **"GithubUserWidgetModule"**

```import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GithubUserWidgetModule } from '../../projects/github-user-widget/src/lib/github-user-widget.module';
/** EN PRODUCCIÓN**/
import { GithubUserWidgetModule } from 'github-user-widget';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GithubUserWidgetModule, FormsModule, ReactiveFormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Añadir estilos

```
@import "./../node_modules/github-user-widget/lib/styles/styles.css";
```

### Uso

- Con buscador
  <ip-buscador-usuario></ip-buscador-usuario>
- Sin buscador
  <ip-usuario [busqueda]="<usuario_a_buscar"></ip-usuario>
