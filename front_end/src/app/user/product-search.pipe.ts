import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(figure: any[], searchText: string): any[] {
    if (!figure || !searchText) {
      return figure;
    }

    searchText = searchText.toLowerCase();

    return figure.filter(figure => figure.name.toLowerCase().includes(searchText));
  }

}
