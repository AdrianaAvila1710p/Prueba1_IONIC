import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
 
    if (!this.username) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar nombre de usuario',
        buttons: ['OK']
      });
      await alert.present();
      return; 
    }

    if (!this.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar contraseña',
        buttons: ['OK']
      });
      await alert.present();
      return; 
    }


    if (this.username === 'Usuario1' && this.password === 'MiClav3') {
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();

      
      this.username = '';
      this.password = '';
    }
  }
}
