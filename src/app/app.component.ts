import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
  title = 'SampleAngularApp';
  userLoggednIn = true;
  @ViewChild(ChildComponent) childComponentRef : ChildComponent;
  public msgfromChild : string;
  ngAfterViewInit(){
   // this.childComponentRef.message = 'Message from parent component';
   this.msgfromChild = this.childComponentRef.childMessage;
  }
}
