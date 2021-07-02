import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-page',
  templateUrl: './pais-page.component.html',
  styles: [
  ]
})
export class PaisPageComponent implements OnInit {

  termino: string = '';
  paises:Pais[]=[];
  hayError:boolean=false;


  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }
  

  buscar(termino: string){
    this.termino=termino;
    this.hayError=false;
    
    this.paisService.buscarPais(this.termino)
      .subscribe(pais=>
        this.paises=pais,
        error=>{this.hayError=true
        this.paises=[];
      }
        );
  }

}
