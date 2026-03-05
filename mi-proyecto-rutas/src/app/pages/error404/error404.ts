import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="text-align: center; padding: 50px;">
      <h1 style="font-size: 100px; color: red;">404</h1>
      <h2>Página no encontrada</h2>
      <a routerLink="/home">Volver al Inicio</a>
    </div>
  `
})
export class Error404Component { }