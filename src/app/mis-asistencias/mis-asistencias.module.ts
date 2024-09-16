import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MisAsistencias } from './mis-asistencias.page'; // Asegúrate de que este nombre sea correcto
import { MisAsistenciasPageRoutingModule } from './mis-asistencias-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAsistenciasPageRoutingModule
  ],
  declarations: [MisAsistencias]
})
export class MisAsistenciasPageModule {}
