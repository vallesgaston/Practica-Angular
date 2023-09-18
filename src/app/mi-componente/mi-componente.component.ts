import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  edad:number;
  nombres:Array<string>;

  constructor(){
    this.edad=18;
    this.nombres=["Gaston","Victor","Jouse","MArtin","Roberr"];
  }

  ngOnInit(): void {
    console.log("componente mi-componente cargado")
    
  }

  aumentarEdad(){
    this.edad ++;
    console.log("aumentar")
  }

  disminuirEdad(){
    this.edad --;
    console.log("disminuir")
  }
}
