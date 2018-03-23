import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AutoItemComponent } from './auto-item/auto-item.component';
import { AutoListComponent } from './auto-list/auto-list.component';
import { AutoRegisterComponent } from './auto-register/auto-register.component';
import { AutoReactivoComponent } from './auto-reactivo/auto-reactivo.component';
import { AutosService } from './autos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AutoItemComponent, AutoListComponent, AutoRegisterComponent, AutoReactivoComponent],
  exports: [AutoListComponent, AutoRegisterComponent, AutoReactivoComponent],
  providers: [AutosService]
})
export class AutosModule { }
