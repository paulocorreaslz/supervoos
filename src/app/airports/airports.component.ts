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

  airports = [];
  dropAirports = [];

  selectedAirport = {};

  constructor(
    private airportsService: AirportsService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.airportsService.listar()
      .subscribe(resposta => { 
        let airportThin = {
          label: '',
          value: ''
        }
        this.airports = <any> resposta;
        Object.keys(this.airports).forEach(key=> {
          this.airport = this.airports[key];     
          airportThin.label = this.airport.name;
          airportThin.value = this.airport.airport;
          this.dropAirports.push(airportThin);
        });
        console.log(this.dropAirports);
      })
  }

}
