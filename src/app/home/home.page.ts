import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  userName: string | null; // Variable para almacenar el nombre de usuario

  constructor(private router: Router) {
    // Recuperar el nombre de usuario de localStorage
    this.userName = localStorage.getItem('userName'); // Almacenar el nombre de usuario
  }

  logout() {
    // Eliminar el token o datos de sesión
    localStorage.clear(); // O sessionStorage.clear();

    // Redirigir a la página de login
    this.router.navigate(['/login']);
  }
}
