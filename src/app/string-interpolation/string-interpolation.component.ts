import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  welcomeMessage = 'Welcome to Angular Data Binding Example!!';
  number1:number=10;  
      name:string='jinal shah';  
      arr:string[]=['India','Usa','Uk','Japan'];  
  constructor() { }

  ngOnInit() {
  }

}
