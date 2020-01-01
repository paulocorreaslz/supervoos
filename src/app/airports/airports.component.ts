import { Component, OnInit } from '@angular/core';
import { AirportsService } from './airports.service';
import { FlightsService } from '../flights/flights.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})

export class AirportsComponent implements OnInit {

  ptBR: any;

  airport = {
    name: '',
    airport: '',
    city: ''
  };

  airportThin = {
    label: '',
    value: ''
  };

  selectedDatabusca = '';
  dateDatabusca = [];
  respostaStringify = [];
  airportsRetorno = [];
  dropAirports = [];
  retornoHttp = [];
  dropDownAirports = [];
  selectedAirportDestiny = {};
  selectedAirportOrigin = {};
  errors = [];
  dateNow: Date = new Date();

  dadosVoos = {
    departure: '',
    arrival: '',
    scales: [],
    origin: '',
    destination: ''
  };

  escala = {
      numFlight: '',
      origin: '',
      destination: '',
      dateStart: {
        year: '',
        month: '',
        dayOfWeek: '',
        leapYear: '',
        dayOfMonth: '',
        monthValue: '',
        era: '',
        dayOfYear: ''
      },
      timeDeparture: {
        hour: '',
        minute: '',
        second: '',
        nano: ''
      },
      timeArrival: {
        hour: '',
        minute: '',
        second: '',
        nano: ''
      },
      price: '',
      operator: '',
      dateTimeDeparture: '',
      dateTimeArrival: ''
    };

  dataRetorno = {
    departure: '',
    arrival: '',
    scales: [],
    destination: '',
    origin: ''
  };



  constructor(
    private airportsService: AirportsService,
    private messageService: MessageService,
    private flightsService: FlightsService
    ) { }

  ngOnInit() {
    this.consultarAirports();
  }

  buscarTrechosVoos() {
    let d = new Date(Date.parse(this.selectedDatabusca));
    this.selectedDatabusca = `${d.getFullYear()}`+`-`+`${("0" + (d.getMonth() + 1)).slice(-2)}`+`-`+`${("0" + d.getDate()).slice(-2)}`;
    // alert(this.selectedDatabusca);
    this.consultarVoo(this.selectedDatabusca);
  }

  consultarVoo($datavoo: any) {
    this.flightsService.consultarVoos(this.selectedAirportOrigin + '', '' + this.selectedAirportDestiny, '' + $datavoo)
    .subscribe(resposta => {
      this.retornoHttp = resposta as any;
      this.errors = JSON.parse(JSON.stringify(this.retornoHttp['errors']));
      if (this.errors.length > 1) {
        this.errors.map((index) => {
          console.log('retorno de erro:' + index);
        });
      } else {
        this.dataRetorno = JSON.parse(JSON.stringify(this.retornoHttp['data']));
        this.dadosVoos = JSON.parse(JSON.stringify(this.dataRetorno));
        console.log('Arrival:' + this.dataRetorno.arrival);
        console.log('Departure:' + this.dataRetorno.departure);
        Object.keys(this.dataRetorno.scales).map((index) => {
          this.escala = this.dataRetorno.scales[index];
          this.dadosVoos.scales.push(this.escala);
          console.log('Escala1:' + this.escala.numFlight);
          console.log('Escala2:' + this.escala.origin);
          console.log('Escala3:' + this.escala.destination);
          console.log('Escala4:' + this.escala.dateStart.month);
          console.log('Escala5:' + this.escala.price);
          console.log('Escala6:' + this.escala.operator);
          console.log('Escala7:' + this.escala.dateTimeDeparture);
          console.log('Escala8:' + this.escala.dateTimeArrival);
        });
      }
    });
  }

  consultarAirports() {
    this.airportsService.listar()
      .subscribe(resposta => {
        this.retornoHttp = <any> resposta;
        this.airportsRetorno = JSON.parse(JSON.stringify(this.retornoHttp['data']));
        Object.keys(this.airportsRetorno).map((index) => {
              this.airport = {...this.airportsRetorno[index]};
              this.airportThin.label = JSON.parse(JSON.stringify(this.airport.name));
              this.airportThin.value = JSON.parse(JSON.stringify(this.airport.airport));
              const airportUnique = JSON.parse(JSON.stringify(this.airportThin));
              // console.log('inserindo:' + airportUnique.label + ' - ' + airportUnique.value);
              this.dropDownAirports.push(airportUnique);
          });
      })
  }

}
