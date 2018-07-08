import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RectangleService {

  constructor() { }

  area(l,b)
  {
    return (l*b);
  }
  perimeter(l,b)
  {
    return 2*(l+b);
  }
}
