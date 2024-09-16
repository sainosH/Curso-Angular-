import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeComponent'
})
export class PipeComponentPipe implements PipeTransform {

  transform(value: string | undefined):string {
    return value?.toUpperCase() || '';
  }

}
