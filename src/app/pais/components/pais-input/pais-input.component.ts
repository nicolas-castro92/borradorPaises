import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnviar: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string ='';

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino);
    this.onEnviar.emit(this.termino);
  }

}
