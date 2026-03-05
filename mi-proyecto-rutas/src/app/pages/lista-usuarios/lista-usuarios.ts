import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuarios.html'
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  error: string = '';
  
  // Inyectamos el detector de cambios
  private cdr = inject(ChangeDetectorRef);
  private srv = inject(UsuariosService);

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.srv.listar().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.error = '';
        // ¡ESTO ES LO IMPORTANTE!
        // Le dice a Angular: "¡Ey! ya tengo los datos, dibuja la tabla AHORA"
        this.cdr.detectChanges(); 
      },
      error: (e) => {
        this.error = 'Error al conectar con la API';
        this.cdr.detectChanges();
      }
    });
  }
}