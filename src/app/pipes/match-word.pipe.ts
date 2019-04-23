import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchWord'
})
export class MatchWordPipe implements PipeTransform {

  transform(value: any, phrase?: any): any {
    if (!phrase || null === phrase || 0 === phrase.length) {
      return value;
    }
    phrase = phrase.toLowerCase();
    value = value.replace(new RegExp(phrase, 'gi'), '<span>$1</span>');
    return value;
  }

}
