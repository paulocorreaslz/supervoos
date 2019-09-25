import { Component, OnInit } from '@angular/core';
import { AirportsService } from '../airports.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  airport = {
    name: '',
    airport: '',
    city: ''
  };

  airportThin = {
    label: '',
    value: ''
  }

  airportsRetorno = [];
  dropAirports = [];
  retornoHttp = [];
  dropDownAirports = [];
  selectedAirportDestiny = {};
  selectedAirportOrigin = {};

  constructor(
    private airportsService: AirportsService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.consultar();
  }

  onClickMe() {
    alert('Origem:'+ this.selectedAirportOrigin +' Destino'+this.selectedAirportDestiny);
  }

  consultar() {
    this.airportsService.listar()
      .subscribe(resposta => {
        this.retornoHttp = <any> resposta;
       
        let cont = 0;
        this.airportsRetorno = this.retornoHttp['data'];
        console.log(this.airportsRetorno);
        console.log(this.dropDownAirports);
          Object.keys(this.airportsRetorno).forEach((index) => {
              this.airport = {...this.airportsRetorno[index]};
              console.log(this.airport);
              this.airportThin.label = this.airport.name;
              this.airportThin.value = this.airport.airport;
              console.log("inserindo:"+this.airportThin.label+" - "+this.airportThin.value);
              this.dropDownAirports.push(this.airportThin);
              console.log(this.dropDownAirports);
              cont++;  
              console.log(cont);
          });
      })
  }

}
