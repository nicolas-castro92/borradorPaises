import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital-page',
  templateUrl: './capital-page.component.html',
  styles: [
  ]
})
export class CapitalPageComponent implements OnInit {
  termino: string = '';
  paises:Pais[]=[];
  hayError:boolean=false;


  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }
  

  buscar(termino: string){
    this.termino=termino;
    this.hayError=false;
    
    this.paisService.buscarCapital(this.termino)
      .subscribe(pais=>
        this.paises=pais,
        error=>{this.hayError=true
        this.paises=[];
      }
        );
  }

}
