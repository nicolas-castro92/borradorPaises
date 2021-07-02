import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styles: [
  ]
})
export class RegionPageComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActivada: string = '';
  paises: Pais[] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  regionSeleccionada(termino: string) {
    this.regionActivada = termino;
    console.log(this.regionActivada);
    this.paisService.buscarRegion(this.regionActivada)
      .subscribe(paises => this.paises = paises);
  }
  getClaseCSS(region: string) {
    return (this.regionActivada ==region) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
