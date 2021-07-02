import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisPageComponent } from './pais/pages/pais-page/pais-page.component';
import { CapitalPageComponent } from './pais/pages/capital-page/capital-page.component';
import { RegionPageComponent } from './pais/pages/region-page/region-page.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path:'',
    component:PaisPageComponent,
    pathMatch:'full'
  },
  {
    path:'capital',
    component:CapitalPageComponent
  },
  {
    path:'region',
    component:RegionPageComponent
  },
  {
    path:'pais/:id',
    component:VerPaisComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
