import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-first',
  templateUrl: './ng-if-first.component.html',
  styleUrls: ['./ng-if-first.component.css']
})


export class NgIfFirstComponent {

  cursos: string[] = ["Angular 2"];

  mostrarCursos: boolean = false;


  constructor() {}


  ngOnInit() {

  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
