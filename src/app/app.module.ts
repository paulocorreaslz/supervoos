import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { AirportsComponent } from './airports/airports.component';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';   
import { MatSliderModule } from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';              
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    AirportsComponent
  ],
  imports: [
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
