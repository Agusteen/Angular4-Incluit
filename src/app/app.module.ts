import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AutosModule } from './autos/autos.module';
import { AutoRegisterComponent } from './autos/auto-register/auto-register.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
