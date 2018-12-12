import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-partial-navheader',
  templateUrl: './partial-navheader.component.html',
  styles: []
})
export class PartialNavheaderComponent implements OnInit {

  @Output() emitEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() enviar = new EventEmitter<String>();
  estado:boolean = false;

  mensaje = "soy el hijo";

  constructor() { }

  ngOnInit() {
  }

  public function1(): boolean{
    let fResponse = !this.estado;
    this.estado = fResponse;
    this.emitEvent.emit(fResponse);
    return fResponse;
  }

  clickEvent() {
    console.log("hola button");
  }

  ejecutarEvento(){
    this.enviar.emit(this.mensaje);
  }

}
