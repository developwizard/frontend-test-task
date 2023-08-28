import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchValue: string, filteredOnlySelected: boolean): any {
    if (!searchValue) return value;
    return filteredOnlySelected
      ? value.filter((v: any) => v.selected && (v.description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1))
      : value.filter((v: any) => (v.description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1))
  }
}
