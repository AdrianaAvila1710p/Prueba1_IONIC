import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisAsistencias } from './mis-asistencias.page'; // Verifica que el nombre sea correcto

const routes: Routes = [
  {
    path: '',
    component: MisAsistencias
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisAsistenciasPageRoutingModule {}
