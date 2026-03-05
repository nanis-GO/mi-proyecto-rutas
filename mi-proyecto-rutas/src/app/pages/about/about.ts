import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>Misión del Proyecto</h2>
    <p>Desarrollar arquitecturas escalables mediante Angular Standalone Components.</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
      <div style="background: #1f1f1f; padding: 20px; border-radius: 10px; border-left: 5px solid #bb86fc;">
        <h3>Ingeniería Full Stack</h3>
        <p>Práctica 2.1.4 — Sitio con 3 páginas + detalle.</p>
      </div>
      <div style="background: #1f1f1f; padding: 20px; border-radius: 10px; border-left: 5px solid #03dac6;">
        <h3>Framework</h3>
        <p>Angular 17+ con motor de renderizado optimizado y modo oscuro nativo.</p>
      </div>
    </div>
  `
})
export class AboutComponent {}