import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage {
  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  goToMenu() {
    this.router.navigate(['/home']); 
  }

  async changePassword() {
    // Verificar que los campos no estén vacíos
    if (!this.currentPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar la contraseña actual.',
        buttons: ['OK']
      });
      await alert.present();
      this.clearFields(); // Limpiar campos
      return;
    }

    if (!this.newPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar la nueva contraseña.',
        buttons: ['OK']
      });
      await alert.present();
      this.clearFields(); // Limpiar campos
      return;
    }

    if (!this.confirmNewPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe confirmar la nueva contraseña.',
        buttons: ['OK']
      });
      await alert.present();
      this.clearFields(); // Limpiar campos
      return;
    }

    // Verificar que las contraseñas nuevas coincidan
    if (this.newPassword !== this.confirmNewPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK']
      });
      await alert.present();
      this.clearFields(); // Limpiar campos
      return;
    }

    // Simulación de un cambio de contraseña exitoso
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'La contraseña ha sido cambiada.',
      buttons: ['OK']
    });
    await alert.present();
    this.clearFields(); // Limpiar campos después de un cambio exitoso
    this.goToMenu(); // Regresar al menú
  }

  // Método para limpiar los campos
  clearFields() {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }
}
