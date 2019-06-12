import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss']
})
export class DirectivesDemoComponent implements OnInit {
  colorValue :string = "black";
  textColor: string = "white";
  styleOne : string = "osjdfkl";
  public hasError = true;
  public titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }
  //class binding
  public successClass :string = "text-success";
  public isSpecial = true;
  public msgClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }
  //ngIf 
  public displayName : boolean = false;
  //ngSwitch
  public color :string = "orange";
  //ngFor
  public colors =['red','blue','green','yellow'];

  public value:string ;
  SelectionChanged(value:string){
    console.log("method called");
    console.log(value);
    this.value = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
