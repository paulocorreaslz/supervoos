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

  respostaStringify = [];
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
        this.airportsRetorno = JSON.parse(JSON.stringify(this.retornoHttp['data']));
        Object.keys(this.airportsRetorno).map((index) => {
              this.airport = {...this.airportsRetorno[index]};
              this.airportThin.label = JSON.parse(JSON.stringify(this.airport.name));
              this.airportThin.value = JSON.parse(JSON.stringify(this.airport.airport));
              let airportUnique = JSON.parse(JSON.stringify(this.airportThin));
              console.log("inserindo:"+airportUnique.label+" - "+airportUnique.value);
              this.dropDownAirports.push(airportUnique);
          });
      })
  }

}
