import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../auto.model';

@Component({
  selector: 'cap-auto-item',
  templateUrl: './auto-item.component.html',
  styleUrls: ['./auto-item.component.scss']
})
export class AutoItemComponent implements OnInit {

  @Input('auto') autoItem: Auto;

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.autoItem);
    console.log('inicio child');
  }

  private cambiarValores() {
    console.log('variable local!');
    this.autoItem.anio = 2018;
    this.change.emit('Se actualizo el año');
  }

}
