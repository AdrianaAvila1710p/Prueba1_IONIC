import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
})
export class RegistrarAsistencia {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/home']); 
  }
}
