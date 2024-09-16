import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAsistencia } from './registrar-asistencia.page'; // Verifica que el nombre sea correcto

const routes: Routes = [
  {
    path: '',
    component: RegistrarAsistencia
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarAsistenciaPageRoutingModule {}
