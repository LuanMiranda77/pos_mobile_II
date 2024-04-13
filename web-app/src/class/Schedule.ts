
export class Schedule {

  id?: string;
  weekDay: number;
  hourIni: string;
  hourFin: string;

  constructor() {
    this.weekDay = 0;
    this.hourIni = '';
    this.hourFin = '';
  }
}