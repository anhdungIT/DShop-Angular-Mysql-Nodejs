import { IndexComponent } from './../admin/index/index.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private apiUrl = 'http://localhost:8080'; // Thay đổi URL API nếu cần

  constructor(private http: HttpClient) { }
  getUniqueFigures(): Observable<any> {
    const url = `${this.apiUrl}/statistical/unique-figures`;
    return this.http.get(url);

  }
  gettotal(): Observable<any> {
    const url = `${this.apiUrl}/statistical/alldetail`;
    return this.http.get(url);

  }
}
