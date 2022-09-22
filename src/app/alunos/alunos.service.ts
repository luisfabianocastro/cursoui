import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }
  list(): Aluno[] {
    return [
      {id: 1, nomealuno: 'Desenvolvimento de Sistemas'},
      {id: 2, nomecurso: 'Logística'},
      {id: 3, nomecurso: 'Administração'},
      {id: 4, nomecurso: 'Marcenaria'},
    ]
  }
}
