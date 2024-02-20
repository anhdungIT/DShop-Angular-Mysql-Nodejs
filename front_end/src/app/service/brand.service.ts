import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = 'http://localhost:8080'; // Thay đổi URL API nếu cần

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    const url = `${this.apiUrl}/brand/getall`;
    return this.http.get(url);
  }
  deleteBrand(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/brand/delete/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
  addBrand(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/brand/add`, formData);
  }
  updateBrand(Id: number, updatedBrandData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/brand/update/${Id}`, updatedBrandData);
  }
  detailBrand(id: number): Observable<any> {
    const url = `${this.apiUrl}/brand/getById/${id}`;
    return this.http.get(url);
  }
  getfigureforbrand(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/brand/getByidcate/${id}`)
  }
}
