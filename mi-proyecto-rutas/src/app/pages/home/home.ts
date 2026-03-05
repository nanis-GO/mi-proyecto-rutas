import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para usar tablas y bucles

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="animation: fadeIn 1s;">
      <h1>Panel de Control Central</h1>
      <p>Bienvenida al sistema de gestión.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background: #1f1f1f;">
        <thead>
          <tr style="border-bottom: 2px solid #bb86fc; text-align: left;">
            <th style="padding: 12px;">Módulo</th>
            <th style="padding: 12px;">Estado</th>
            <th style="padding: 12px;">Uso de CPU</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of stats" style="border-bottom: 1px solid #333;">
            <td style="padding: 12px;">{{ item.modulo }}</td>
            <td style="padding: 12px; color: #03dac6;">● {{ item.estado }}</td>
            <td style="padding: 12px;">{{ item.uso }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class HomeComponent {
  // Datos extra para la tabla
  stats = [
    { modulo: 'Base de Datos', estado: 'Activo', uso: 12 },
    { modulo: 'Servidor de Rutas', estado: 'Estable', uso: 5 },
    { modulo: 'Seguridad SSL', estado: 'Protegido', uso: 2 }
  ];
}