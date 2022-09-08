import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})
export class ListacursosComponent implements OnInit {

  cursos: Curso[] = [
    {id: 1, nomecurso: 'Desenvolvimento de Sistemas'},
    {id: 2, nomecurso: 'Logística'},
    {id: 3, nomecurso: 'Administração'}
  ];
  displayedColumns = ['id', 'nomecurso'];

  constructor() { }

  ngOnInit(): void {
  }

}