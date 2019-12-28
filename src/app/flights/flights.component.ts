import { Component, OnInit } from '@angular/core';
import { FlightsService } from './flights.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  constructor(private flightsService: FlightsService) {
  }

  ngOnInit() {
  }

}
