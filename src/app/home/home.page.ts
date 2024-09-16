import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  logout() {
    // Eliminar el token o datos de sesión
    localStorage.clear(); // O sessionStorage.clear();

    // Redirigir a la página de login
    this.router.navigate(['/login']);
  }
}