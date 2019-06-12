import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {
 public charArray : string [];
  arrLength: any;
 public outputString : string ='';
//public i:number;
  transform(value: any): any {
    // let inputString = value;
    this.charArray = value.split('');
    // console.log(this.charArray);
    // console.log(this.charArray.length);
    this.arrLength = this.charArray.length;
    let i:any;
    for( i = this.arrLength-1;i>=0;i--){
      this.outputString = this.outputString.concat(this.charArray[i]);
    }
  //   for (String val in this.charArray) { 
  //     this.outputString = this.outputString + val;
  //  }
   console.log(this.outputString);
    return this.outputString;
  }

}
