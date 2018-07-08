import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor() { }

  convertToCelcius(f)
  {
    return (f-32)/1.8;
  }

  convertToFarenheit(c)
  {
    return (c*1.8)+32;
  }
}
