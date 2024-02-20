import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'pending':
        return 'Đang chờ xử lý';
      case 'processing':
        return 'Đã xác nhận';
      case 'shipped':
        return 'Đang vận chuyển';
      case 'delivered':
        return 'Đã giao';
      case 'cancelled':
        return 'Đã hủy';
      default:
        return status; // Trả về giá trị gốc nếu không khớp
    }
  }

}
