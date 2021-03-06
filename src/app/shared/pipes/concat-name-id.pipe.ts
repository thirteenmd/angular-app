import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatNameId'
})
export class ConcatNameIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newName = `${args}_${value}`;
    return newName;
  }

}
