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

  @Input() dadosVoosAirportsComponent: any;

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

  mostrarVoos: boolean = false;

  constructor(
    private flightsService: FlightsService) {
  }

  ngOnInit() {
    this.flights = this.dadosVoosAirportsComponent.dadosVoos;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.flights = this.dadosVoosAirportsComponent.dadosVoos;
    if (this.flights.scales.length > 0) {
      this.mostrarVoos = true;
      this.ngOnInit();
    }
  }
}
