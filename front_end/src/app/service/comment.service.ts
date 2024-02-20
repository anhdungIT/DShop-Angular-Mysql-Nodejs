import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:8080'; // Thay đổi URL API nếu cần

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    const url = `${this.apiUrl}/comment/getall`;
    return this.http.get(url);
  }
  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comment/get/${id}`);
  }

}
