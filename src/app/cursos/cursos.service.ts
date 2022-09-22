import { Curso } from './../core/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  list(): Curso[] {
    return [
      {id: 1, nomecurso: 'Desenvolvimento de Sistemas'},
      {id: 2, nomecurso: 'Logística'},
      {id: 3, nomecurso: 'Administração'},
      {id: 4, nomecurso: 'Marcenaria'},
    ]
  }
}
