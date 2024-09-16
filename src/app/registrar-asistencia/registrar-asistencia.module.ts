import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrarAsistencia } from './registrar-asistencia.page'; // Asegúrate de que este nombre sea correcto
import { RegistrarAsistenciaPageRoutingModule } from './registrar-asistencia-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarAsistenciaPageRoutingModule
  ],
  declarations: [RegistrarAsistencia]
})
export class RegistrarAsistenciaPageModule {}
