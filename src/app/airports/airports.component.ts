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
       
        let cont = 0;
        this.airportsRetorno = JSON.parse(JSON.stringify(this.retornoHttp['data']));
        // console.log(this.airportsRetorno);
        // console.log(this.dropDownAirports);

        let x = [];  
        Object.keys(this.airportsRetorno).map((index) => {
              this.airport = {...this.airportsRetorno[index]};
              console.log(this.airport);
              this.airportThin.label = JSON.parse(JSON.stringify(this.airport.name));
              this.airportThin.value = JSON.parse(JSON.stringify(this.airport.airport));
              let airportx = JSON.parse(JSON.stringify(this.airportThin));
              console.log("inserindo:"+this.airportThin.label+" - "+this.airportThin.value);
              this.dropDownAirports.push(airportx);
              
              cont++;  
              console.log(cont);
          });
          console.log(this.dropDownAirports);
      })
  }

}
