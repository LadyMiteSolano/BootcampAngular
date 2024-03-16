import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Generalpipe',
  pure: false
})
export class GeneralpipePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    
      return value + ' Items en sock';
    
  }

}
