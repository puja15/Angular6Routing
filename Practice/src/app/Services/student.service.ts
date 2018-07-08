import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  sumOfMarks(a,b,c)
  {
    return (a+b+c);
  }

  averageOfMarks(a,b,c)
  {
    return (a+b+c)/3;
  }
}
