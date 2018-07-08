import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  private city:any={};
  private cities :any=[];
  private btn_status :boolean=true;
  private editid: string;
  constructor(private x:Http) {

    
   }

  ngOnInit() {
    this.getCity();
  }

  saveCity()
  {
    console.log(this.city);
    this.x.post("https://myway-7658a.firebaseio.com/cities.json",this.city).subscribe(

    (res:Response)=>{
      console.log("Record inserted");

    },
    (error)=>{
      console.log("the error is"+error);
    },
    ()=>{this.getCity();}

    );

  }

  getCity()
  {
  this.x.get("https://myway-7658a.firebaseio.com/cities.json").subscribe(
(res)=>{

var resjson=res.json();
console.log(resjson);
var keys=Object.keys(resjson);
this.cities=keys.map(function(key){

  return{key :key,data:resjson[key]};
});

},
(error)=>{
  console.log("The eror is"+error);
},
()=>{}

);
  }

  delCity(key){
this.x.delete("https://myway-7658a.firebaseio.com/cities/"+key+".json").subscribe(

    (res)=>{
      console.log(res);
      this.getCity();
    },
    (error)=>{},
    ()=>{}
);
  }

  editCity(ct)
  {
   this.btn_status=false;
    this.city=ct.data;
    this.editid=ct.key;
  }

  updateCity()
  {
    this.x.put("https://myway-7658a.firebaseio.com/cities/"+this.editid+".json",this.city).subscribe(

    (res)=>{
      console.log("record updated",res);
    },
    (error)=>{
      console.log("the error is",error);
    },
    ()=>{

      this.city={};
    }
    );
  }

}
