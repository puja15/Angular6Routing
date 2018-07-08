import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { RectangleService } from '../rectangle.service';
import { StudentService } from '../student.service';
import { TemperatureService } from '../temperature.service';


@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.css']
})
export class TestserviceComponent implements OnInit {

  constructor(private x: CalculatorService,private y :RectangleService,private z : StudentService,private p :TemperatureService ) { }

  ngOnInit() {

   // alert("1");
    // var ans=this.x.add(10,20);
    // console.log("Sum is",ans);

    var add=this.x.add(10,20);
    console.log("sum is",add);
    
    var ar=this.y.area(10,15);
    console.log("Area is",ar);

    var peri=this.y.perimeter(10,15);
    console.log("perimeter is",peri);

    var sumofMArks=this.z.sumOfMarks(10,20,30);
    console.log("Sum of marks",sumofMArks);

    var average=this.z.averageOfMarks(10,20,30);
    console.log("Average of marks",average);

    var tempC=this.p.convertToCelcius(68);
    console.log("Temperarture at celcius is",tempC);

    var tempF=this.p.convertToFarenheit(20);
    console.log("Temperature at Farhenheit is",tempF);
  }

}
