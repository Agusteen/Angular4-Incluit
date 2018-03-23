import { Injectable } from '@angular/core';
import { Auto } from './auto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutosService {

  constructor(private http: HttpClient) { }

  getListaAutos():Auto[] {
    return [
      new Auto('Fiesta', 2011, 'Rojo'),
      new Auto('Clio', 2015, 'Blanco'),
      new Auto('Lancer', 2008, 'Azul')
    ];

  }

  getListaAutosHttp():Observable<Array<Object>> {
    return this.http.get<Array<Object>>('https://jsonplaceholder.typicode.com/posts/1');
  }

}
