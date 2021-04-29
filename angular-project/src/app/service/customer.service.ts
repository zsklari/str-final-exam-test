import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = `https://nettuts.hu/jms/cherryApp/customers`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  get(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.apiUrl}/${id}`);
  }

}
