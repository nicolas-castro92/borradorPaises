import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private http: HttpClient ) { }

  servicioUrl: string = 'https://restcountries.eu/rest/v2';
  //capital => https://restcountries.eu/rest/v2/capital/tallinn
  //region => https://restcountries.eu/rest/v2/region/europe

  //Metodo para buscar un país por termino
  buscarPais(termino: string):Observable<Pais[]>{
    const url : string =`${ this.servicioUrl }/name/${ termino } `;
    return this.http.get<Pais[]>(url);
    
  }
  //Metodo capital
  buscarCapital(termino: string):Observable<Pais[]>{
    const url=`${ this.servicioUrl }/capital/${ termino }`;
    return this.http.get<Pais[]>(url);
  }
  //Metodo Region
  buscarRegion( termino: string ):Observable<Pais[]>{
    const url=` ${ this.servicioUrl }/region/${ termino } `
    return this.http.get<Pais[]>(url);
  }

}
