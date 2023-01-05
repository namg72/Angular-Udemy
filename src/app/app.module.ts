import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { DbzModule } from './dbz/dbz.module';
import { HeoresModule } from './heroes/heroes.module';




@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, 
        HeoresModule,
        ContadorModule,
        DbzModule
        
      
    ]
})
export class AppModule { }
