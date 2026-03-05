import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  // URL Correcta: https://jsonplaceholder.typicode.com/users
  private api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.api);
  }
}