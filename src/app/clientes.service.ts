import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getDatos(page: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get(`${this.apiUrl}`,{ params });
  }

  enviarDatos(data:any): Observable<any> {


    return this.http.post(`${this.apiUrl}`, data);
  }

  EliminarDatos(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
