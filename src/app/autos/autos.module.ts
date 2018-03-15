import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoItemComponent } from './auto-item/auto-item.component';
import { AutoListComponent } from './auto-list/auto-list.component';
import { AutoRegisterComponent } from './auto-register/auto-register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AutoItemComponent, AutoListComponent, AutoRegisterComponent],
  exports: [AutoListComponent, AutoRegisterComponent]
})
export class AutosModule { }
