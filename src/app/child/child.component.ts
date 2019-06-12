import { Component, OnInit , Input, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() loggedIn :boolean ;
  //alias name to input value
  @Input('validUser') valid:boolean;

  //output decorator
  @Output() greetEvent =new EventEmitter();
  callParentGreet(){
    //alert('sending a message');
    this.greetEvent.emit();
  }
  message : string ;
  
  public childMessage : string = "this message is from a child component";
  constructor() { }

  ngOnInit()
   {
  }

}
