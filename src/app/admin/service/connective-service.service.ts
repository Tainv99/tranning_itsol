import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectiveServiceService {

  constructor(private http: HttpClient) { }

   // tslint:disable-next-line:ban-types
  getConnectiveList(con: Object): Observable<any>{
    return this.http.post(`http://localhost:8082/customer/seach`, con);
  }
  // tslint:disable-next-line:ban-types
  updateConnective(con: Object): Observable<any>{
    return this.http.post(``, null);
  }
  // tslint:disable-next-line:typedef
  getConById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8082/customer/${id}`);
  }
}
