import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigListPipe'
})
export class BigListPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
