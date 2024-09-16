import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistencias {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/home']); // Cambia '/menu' por la ruta correcta
  }
}
