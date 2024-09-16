import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MisAsignaturas } from './mis-asignaturas.page'; // Asegúrate de que este nombre sea correcto
import { MisAsignaturasPageRoutingModule } from './mis-asignaturas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAsignaturasPageRoutingModule
  ],
  declarations: [MisAsignaturas]
})
export class MisAsignaturasPageModule {}
