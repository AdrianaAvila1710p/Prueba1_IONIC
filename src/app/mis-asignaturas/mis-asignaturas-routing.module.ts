import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisAsignaturas } from './mis-asignaturas.page'; // Verifica que el nombre sea correcto

const routes: Routes = [
  {
    path: '',
    component: MisAsignaturas
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisAsignaturasPageRoutingModule {}
