import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadoHeroe',
  templateUrl: '../listado-heroes/listado-heroe.component.html',
  styleUrls: ['../listado-heroes/listado-heroe.component.css']
})
export class ListadoHeroeComponent  {

public heroes:string[]=['Spiderman', 'Superman', 'hulk', 'Ironman']
public newHeroes:string[]=[]
public heroeBorrado=""


borrarHeroe(){

 this.heroeBorrado  = this.heroes.shift()  || ""

this.newHeroes.push(this.heroeBorrado)

}
}