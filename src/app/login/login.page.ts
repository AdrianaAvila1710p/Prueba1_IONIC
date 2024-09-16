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
    // Validar que se ingrese el nombre de usuario
    if (!this.username) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar nombre de usuario',
        buttons: ['OK']
      });
      await alert.present();
      return; 
    }

    // Validar que se ingrese la contraseña
    if (!this.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar contraseña',
        buttons: ['OK']
      });
      await alert.present();
      return; 
    }

    // Simular la validación de las credenciales
    if (this.username === 'Usuario1' && this.password === 'MiClav3') {
      // Almacenar el nombre de usuario en localStorage
      localStorage.setItem('userToken', 'mi-token-falso'); // Simular token
      localStorage.setItem('userName', this.username); // Almacenar nombre de usuario

      // Redirigir a la página de inicio
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();

      // Limpiar los campos
      this.username = '';
      this.password = '';
    }
  }

  async recoverPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperar Contraseña',
      message: 'Se ha enviado un correo para restablecer la contraseña',
      buttons: ['OK']
    });
    await alert.present();
  }
}
