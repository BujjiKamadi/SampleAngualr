import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent implements OnInit {
  name :string ="Hari";
  imgPath : string = "assets/images/binding.png";
  currentStatus : boolean = true;
  title : string = "Event binding ";

  changeTitle(){
    this.title = "Learning event binding" ;
  }
  constructor() { }

  ngOnInit() {
  }

}
