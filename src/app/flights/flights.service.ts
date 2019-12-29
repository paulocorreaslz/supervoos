import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {

  apiUrl = 'http://localhost:9090/api/search/PLU/FLN/2019-02-11';

  //http://localhost:9090/api/airports
  //https://voorepo.herokuapp.com/api/airports
  constructor(private httpClient: HttpClient) { }

  consultarVoos(origem: string, destino: string, dataatual: string) {
    return this.httpClient.get(this.apiUrl + '/' + origem + '/' + destino + '/' + dataatual);
  }

}
