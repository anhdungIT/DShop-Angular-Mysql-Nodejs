import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080'; // Thay đổi URL API nếu cần

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    const url = `${this.apiUrl}/order/getall`;
    return this.http.get(url);
  }
  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/order/get/${id}`);
  }
  getCusById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/order/getCusById/${id}`);
  }
  updateStatus(Id: number, updatedStatusData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/order/update/${Id}`, updatedStatusData);
  }
  // createOrder(order: any, orderDetail: any): Observable<any> {
  //   const url = `${this.apiUrl}/order/create-order`;
  //    // Sắp xếp dữ liệu để phản ánh cấu trúc của API
  //    const body = {
  //     order: {
  //       customerName: order.customerName,
  //       customerEmail: order.customerEmail,
  //       customerMobile: order.customerMobile,
  //       customerAddress: order.customerAddress,
  //       customerMessage: order.customerMessage,
  //       paymentMethod: order.paymentMethod,
  //       userID: order.userID, // Giả sử order.userID là giá trị bạn muốn chuyển vào UserID
  //     },
  //     orderDetail,
  //   };

  //   return this.http.post(url, body);
  // }
  createOrder(order: any, orderDetail: any): Observable<any> {
    const url = `${this.apiUrl}/order/create-order`;

    const body = {
      order: {
        customerName: order.customerName,
        customerEmail: order.customerEmail,
        customerMobile: order.customerMobile,
        customerAddress: order.customerAddress,
        customerMessage: order.customerMessage,
        paymentMethod: order.paymentMethod,
        userID: order.userID,
      },
      orderDetail,
    };

    // Chuyển đổi dữ liệu thành định dạng phù hợp với router.post('/create-order')
    const formattedBody = {
      order: body.order,
      orderDetail: body.orderDetail,
    };

    return this.http.post(url, formattedBody);
  }
}
