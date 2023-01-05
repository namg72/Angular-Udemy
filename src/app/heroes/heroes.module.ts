import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroes/heroes.component';
import { ListadoHeroeComponent } from './listado-heroes/listado-heroe.component';







@NgModule({
    declarations: [
    ListadoHeroeComponent,
    HeroeComponent
       
       
    ],
   exports: [
       ListadoHeroeComponent,
       HeroeComponent
   ],
  
    imports: [
        CommonModule
        
      
    ]
})
export class HeoresModule { }
