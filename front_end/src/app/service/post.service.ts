import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080'; // Thay đổi URL API nếu cần

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    const url = `${this.apiUrl}/blog/getall`;
    return this.http.get(url);

  }
  addProduct(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/blog/add`, formData);
  }
  updateProduct(Id: number, updatedPostData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/blog/update/${Id}`, updatedPostData);
  }


  deletePost(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/blog/delete/${id}`;
    return this.http.delete<any>(deleteUrl);

  }
  detailPost(id: number): Observable<any> {
    const url = `${this.apiUrl}/blog/getById/${id}`;
    return this.http.get(url);
  }
}
