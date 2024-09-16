import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Asistencia {
  asignatura: string;
  fecha: string;
  presente: boolean;
}

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistencias {
  asistencias: Asistencia[] = [
    { asignatura: 'Programación de Base de Datos', fecha: '2024-09-15', presente: true },
    { asignatura: 'Programación de aplicaciones móviles', fecha: '2024-09-16', presente: false },
    { asignatura: 'Calidad de Software', fecha: '2024-09-17', presente: true },
    { asignatura: 'Inglés', fecha: '2024-09-18', presente: false },
  ];

  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/home']); 
  }
}
