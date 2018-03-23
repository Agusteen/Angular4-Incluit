import { Component, OnInit } from '@angular/core';
import { Auto } from '../auto.model';

@Component({
  selector: 'cap-auto-register',
  templateUrl: './auto-register.component.html',
  styleUrls: ['./auto-register.component.scss']
})
export class AutoRegisterComponent implements OnInit {

  auto: Auto = new Auto(null, null, null);

  constructor() { }

  ngOnInit() {
  }

  guardar(form) {
    if(form.valid) alert("Se registró correctamente")
    console.log("Se guardo");    
  }

  limpiar() {
    this.auto = new Auto(null, null, null);
  }

}
