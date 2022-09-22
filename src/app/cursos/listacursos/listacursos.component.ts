import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})
export class ListacursosComponent implements OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['id', 'nomecurso'];

  constructor(private CursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.CursosService.list();
  }

}
