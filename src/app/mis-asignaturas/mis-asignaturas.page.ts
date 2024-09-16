import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturas {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/home']); 
  }
}


  