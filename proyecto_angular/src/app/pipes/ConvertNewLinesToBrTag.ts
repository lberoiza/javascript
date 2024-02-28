import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertNewLinesToBrTag',
  standalone: true
})
export class ConvertNewLinesToBrTag implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n/g, '<br/>');
  }
}
