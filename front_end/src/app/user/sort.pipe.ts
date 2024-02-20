import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(figure: any[], minPrice: number, maxPrice: number): any[] {
    // Lọc và sắp xếp từ bé đến lớn
    return figure
      .filter(product => (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice))
      .sort((a, b) => a.price - b.price);
  }
}
