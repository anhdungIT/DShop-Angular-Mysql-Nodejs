import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostcateService {
  private apiUrl = 'http://localhost:8080'; // Thay đổi URL API nếu cần

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    const url = `${this.apiUrl}/blog-cate/getall`;
    return this.http.get(url);
  }
  getPostcateById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blog-cate/getById/${id}`);
  }

  addPostcate(category: any) {
    return this.http.post(`${this.apiUrl}/blog-cate/add`, category);
  }

  updatePostcate(id: number, categoryData: any): Observable<any> {
    const url = `${this.apiUrl}/blog-cate/update/${id}`;
    return this.http.put<any>(url, categoryData);
  }

  deletePostcate(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/blog-cate/delete/${id}`;
    return this.http.delete<any>(deleteUrl); // Gửi yêu cầu DELETE để xóa sản phẩm với CategoryId cụ thể
  }
  getCategoryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blog-cate/getByidcate/${id}`);
  }
}

