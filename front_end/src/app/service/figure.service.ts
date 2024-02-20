import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FigureService {
  private apiUrl = 'http://localhost:8080'; // Thay đổi URL API nếu cần

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    const url = `${this.apiUrl}/figure/getall`;
    return this.http.get(url);

  }
  addProduct(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/figure/add`, formData);
  }
  updateProduct(Id: number, updatedProductData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/figure/update/${Id}`, updatedProductData);
  }


  deletefigure(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/figure/delete/${id}`;
    return this.http.delete<any>(deleteUrl);

  }
  getLatestFigures(): Observable<any> {
    const url = `${this.apiUrl}/figure/getLatestFigures`;
    return this.http.get(url);

  }
  getPromotionFigures(): Observable<any> {
    const url = `${this.apiUrl}/figure/getpromotionFigures`;
    return this.http.get(url);

  }
  gethotFigures(): Observable<any> {
    const url = `${this.apiUrl}/figure/getHotFigures`;
    return this.http.get(url);
  }
  detailFigures(id: number): Observable<any> {
    const url = `${this.apiUrl}/figure/getById/${id}`;
    return this.http.get(url);
  }
  getByPriceRange(minPrice: number, maxPrice: number): Observable<any> {
    const url = `${this.apiUrl}/figure/getByPriceRange/${minPrice}/${maxPrice}`;
    return this.http.get(url);
  }
}
