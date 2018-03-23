import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cap-auto-reactivo',
  templateUrl: './auto-reactivo.component.html',
  styleUrls: ['./auto-reactivo.component.scss']
})
export class AutoReactivoComponent implements OnInit {

  autoForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.inicializarFormulario();
  }

  ngOnInit() {    
  }

  inicializarFormulario() {
    this.autoForm = this.formBuilder.group({
      modelo: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      anio: ['', Validators.pattern(/[0-9]/)],
      marca: this.formBuilder.group({
        nombre: ''
      })
    });
    //console.log(this.autoForm.controls['modelo']);
    
  }

}
