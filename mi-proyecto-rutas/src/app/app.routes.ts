import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { UserDetailComponent } from './pages/user-detail/user-detail';
import { Error404Component } from './pages/error404/error404';
// Importación corregida:
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios'; 

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'api-list', component: ListaUsuariosComponent }, // Ruta para la tabla
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];