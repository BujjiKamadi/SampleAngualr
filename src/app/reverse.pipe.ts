import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args): any {
    // console.log(value,args);
    // return "codedamn";

    let inputString = value;
    if(args[0]){//add a fullstop
      inputString +=".";
    }
    if(args[1]==="singlequote"){
      inputString = "'" + inputString.toUpperCase()+"'";
    }else if(args[1]=== "doublequote"){
      inputString = '"' + inputString +'"';
    }
      return inputString;

  }

}
