import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
   userLoggedIn : boolean = false;
   @ViewChild('nameRef') nameElementRef : ElementRef;
   ngAfterViewInit(){
     this.nameElementRef.nativeElement.focus();
   }
  //output decorator
  greet(){
    alert('hello hari');
  }
  constructor() { }

  ngOnInit() {
  }

}
