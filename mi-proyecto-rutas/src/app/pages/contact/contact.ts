import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <h2>Terminal de Soporte</h2>
    <p>Si encuentras un error en el sistema, contacta al administrador.</p>
    
    <div style="background: #1f1f1f; padding: 20px; border-radius: 10px; line-height: 2;">
      <p><b>📍 Ubicación:</b> Laboratorio de Ingeniería Full Stack - Campus Virtual</p>
      <p><b>✉️ Email:</b> admin&#64;l22200734@pachuca.tecnm.mx</p>
      <p><b>⏰ Horario:</b> 24/7 (Soporte Automatizado)</p>
      <button style="margin-top: 10px; background: #03dac6; color: #000; padding: 10px; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">
        ABRIR TICKET DE AYUDA
      </button>
    </div>
  `
})
export class ContactComponent {}