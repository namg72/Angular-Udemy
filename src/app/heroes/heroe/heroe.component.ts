import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

public heroes:string[]=['Spiderman', 'Superman', 'hulk', 'Ironman']
public newHeroes:string[]=[]
public heroeBorrado=""


borrarHeroe(){

 this.heroeBorrado  = this.heroes.shift()  || ""

this.newHeroes.push(this.heroeBorrado)

}
}