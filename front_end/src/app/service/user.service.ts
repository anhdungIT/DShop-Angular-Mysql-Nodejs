import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080'; // Thay đổi URL API nếu cần

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    const url = `${this.apiUrl}/user/getall`;
    return this.http.get(url);
  }
  delete(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/user/delete/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
  addBrand(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/signup`, formData);
  }
  login(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/login`, data);
  }
}
