import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p'
})
export class PPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
