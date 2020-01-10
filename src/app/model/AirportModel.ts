class AirportModel {
  name: string;
  airport: string;
  city: string;


  constructor(name: string, airport: string, city: string){
    this.name = name;
    this.airport = airport;
    this.city = city;
  }

  setName(name: string){
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setAirport(airport: string) {
    this.airport = airport;
  }
  getAirport(){
    return this.airport;
  }
  setCity(city: string) {
    this.city = city;
  }
  getCity() {
    return this.city;
  }
}
