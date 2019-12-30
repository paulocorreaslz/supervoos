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

  dateNow : Date = new Date();


  constructor(
    private airportsService: AirportsService,
    private messageService: MessageService,
    private flightsService: FlightsService
    ) { }

  ngOnInit() {
    this.ptBR = {
       dateFormat: 'dd/mm/yyyy'
    };
    this.consultarAirports();
  }

  onClickMe(){

    let d = new Date(Date.parse(this.selectedDatabusca));
    this.selectedDatabusca = `${d.getFullYear()}`+`-`+`${("0" + (d.getMonth() + 1)).slice(-2)}`+`-`+`${("0" + d.getDate()).slice(-2)}`;
    alert(this.selectedDatabusca);
    this.consultarVoo(this.selectedDatabusca);
  }

  consultarVoo($datavoo: any) {
    this.flightsService.consultarVoos(this.selectedAirportOrigin + '', '' + this.selectedAirportDestiny, '' + $datavoo)
    .subscribe(resposta => {
      this.retornoHttp = <any> resposta;
      console.log(resposta);
      //   this.airportsRetorno = JSON.parse(JSON.stringify(this.retornoHttp['data']));
    //   Object.keys(this.airportsRetorno).map((index) => {
    //         this.airport = {...this.airportsRetorno[index]};
    //         this.airportThin.label = JSON.parse(JSON.stringify(this.airport.name));
    //         this.airportThin.value = JSON.parse(JSON.stringify(this.airport.airport));
    //         let airportUnique = JSON.parse(JSON.stringify(this.airportThin));
    //         console.log("inserindo:"+airportUnique.label+" - "+airportUnique.value);
    //         this.dropDownAirports.push(airportUnique);
    //     });
    // })
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
              let airportUnique = JSON.parse(JSON.stringify(this.airportThin));
              console.log("inserindo:"+airportUnique.label+" - "+airportUnique.value);
              this.dropDownAirports.push(airportUnique);
          });
      })
  }

}
