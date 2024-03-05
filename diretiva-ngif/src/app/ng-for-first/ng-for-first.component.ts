import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-first',
  templateUrl: './ng-for-first.component.html',
  styleUrls: ['./ng-for-first.component.css']
})
export class NgForFirstComponent implements OnInit{

  cursos: string[] = ["Angular 2", "Java", "Phone"];

  constructor() {


  }

  ngOnInit() {

    for(let i=0; i<this.cursos.length; i++) {
      let curso = this.cursos[i];
    }

  }

}
