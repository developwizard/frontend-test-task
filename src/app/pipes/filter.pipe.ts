import {Pipe, PipeTransform} from '@angular/core';

/**
 * This channel filters an array of elements by checking if the title or description of the element contains the given string.
 */
@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  /**
   * Return array of elements that conforms to the condition
   *
   * @param value Array of values
   * @param searchValue Condition
   * @param filteredOnlySelected  Additional condition that filtered only selected elements
   */
  transform(value: any, searchValue: string, filteredOnlySelected: boolean): any {
    if (!searchValue) return value;
    return filteredOnlySelected
      ? value.filter((v: any) => v.selected && (v.description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1))
      : value.filter((v: any) => (v.description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1))
  }
}
