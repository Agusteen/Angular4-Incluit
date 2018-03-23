import { Component, OnInit, OnChanges, AfterContentInit, OnDestroy, ViewChild } from '@angular/core';
import { Auto } from '../auto.model';
import { AutoItemComponent } from '../auto-item/auto-item.component';
import { AutosService } from '../autos.service';

@Component({
  selector: 'cap-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss']
})
export class AutoListComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {


  @ViewChild(AutoItemComponent)
  private autoItemComp: AutoItemComponent;


  autos: Auto[] = [new Auto('Fiesta', 2000, 'negro'),
  new Auto('Bora', 2000, 'Rojo'),
  new Auto('Uno', 2000, 'Blanco')];



  autoMalvado: Auto;
  autosFromService: Auto[];
  itemsFromService: Array<Object>;

  onChange(mensaje: string) {
    console.log(mensaje);
  }

  cambiarValores(){
    //this.autoItemComp.cambiarValores();
  }

  constructor(public autoService: AutosService) {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('primero');
  }

  ngOnInit() {
    this.autoMalvado = new Auto('Fiesta', 2017, 'azul');
    console.log('segundo');
    this.autosFromService = this.autoService.getListaAutos();

    this.autoService.getListaAutosHttp()
    .subscribe(data => {
      console.log(data); 
      this.itemsFromService = data;  
    })
    
  }

  ngAfterContentInit() {
    console.log('tercero');
  }

  ngOnDestroy() {

  }

}
