import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiurl="https://api.isthara.com/foodcourt/user/ist/getHomedata/cf15e6e0-327f-11ee-96eb-0ae944680890"
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }
}
