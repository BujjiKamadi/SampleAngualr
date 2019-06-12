import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {
  public title : string ="angular pipes demo";
  public todayDate :Date  = new Date();
  
  constructor() { }

  ngOnInit() {
    console.log(this.todayDate);
  }
  public value: string;  
  change(value : string ){
    this.value = value;
  }  
}
