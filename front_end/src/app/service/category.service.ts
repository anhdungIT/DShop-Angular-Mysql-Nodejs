import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080'; // Thay đổi URL API nếu cần

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    const url = `${this.apiUrl}/category/getall`;
    return this.http.get(url);
  }
  getCategoryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/category/getById/${id}`);
  }

  addCategory(category: any) {
    return this.http.post(`${this.apiUrl}/category/add`, category);
  }

  updateCategory(id: number, categoryData: any): Observable<any> {
    const url = `${this.apiUrl}/category/update/${id}`;
    return this.http.put<any>(url, categoryData);
  }
  getfigureforcate(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/category/getByidcate/${id}`)
  }
  deleteCategory(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/category/delete/${id}`;
    return this.http.delete<any>(deleteUrl); // Gửi yêu cầu DELETE để xóa sản phẩm với CategoryId cụ thể
  }
}
