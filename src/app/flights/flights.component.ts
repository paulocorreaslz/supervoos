import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FlightsService } from './flights.service';
import { AirportsComponent } from './../airports/airports.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  @Input() VoosAirportsComponents: any;
  @Input() mostraVoosAirportsComponents: any;

  flights = {
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

    mostraVoos = false;

    dadosVoos = {
      departure: '',
      arrival: '',
      scales: [],
      origin: '',
      destination: ''
    };

    dataRetorno = {
      departure: '',
      arrival: '',
      scales: [],
      destination: '',
      origin: ''
    };

  constructor() {
  }

  ngOnInit() {
    console.log('component flight valor de flight>>>' + this.VoosAirportsComponents);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.dadosVoos = this.VoosAirportsComponents;
    Object.keys(this.dataRetorno.scales).map((index) => {
          this.escala = this.dataRetorno.scales[index];
          this.dadosVoos.scales.push(this.escala);
        });
    this.mostraVoos = true;
  }
}
