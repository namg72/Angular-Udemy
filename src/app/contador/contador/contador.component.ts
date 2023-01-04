import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent  {

  title = 'Contador App';
  contador=0
  
  base=10
 

acumular(valor:number){
this.contador+= valor
}
}
