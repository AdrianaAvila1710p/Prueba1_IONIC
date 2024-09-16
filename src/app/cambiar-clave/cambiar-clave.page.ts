import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/menu']); 
  }
}
