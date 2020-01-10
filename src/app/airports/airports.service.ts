import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AirportsService {

  apiUrl = 'https://voorepo.herokuapp.com/api/airports';

  // http://localhost:9090/api/airports
  // https://voorepo.herokuapp.com/api/airports
  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl);
  }

}
