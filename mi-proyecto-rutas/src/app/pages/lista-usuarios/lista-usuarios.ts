import { Component, OnInit } from '@angular/core';
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

  constructor(private srv: UsuariosService) {}

  ngOnInit() {
    this.srv.listar().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.error = ''; 
      },
      error: () => {
        this.usuarios = [];
        this.error = 'No se pudo cargar usuarios de la API';
      }
    });
  }
}