import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { CapitalPageComponent } from './pages/capital-page/capital-page.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { PaisTableComponent } from './components/pais-table/pais-table.component';



@NgModule({
  declarations: [
    CapitalPageComponent,
    PaisPageComponent,
    RegionPageComponent,
    VerPaisComponent,
    PaisInputComponent,
    PaisTableComponent,
  ],
  exports: [
    CapitalPageComponent,
    PaisPageComponent,
    RegionPageComponent,
    VerPaisComponent,
    PaisInputComponent,
    PaisTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PaisModule { }
