import { Component, OnInit, Input } from '@angular/core';
import { FlightsService } from './flights.service';
import { AirportsComponent } from './../airports/airports.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  @Input() Voos = {};

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

  mostrarVoos: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log('component flight valor de flight>>>' + this.Voos);
    this.mostrarVoos = true;
  }

}
