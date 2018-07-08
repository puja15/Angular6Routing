import { Component, OnInit } from '@angular/core';
import {Http,Response} from'@angular/http';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(private x:Http) { }

  private Patients:any={};
  private PatientArray :any=[];
  ngOnInit() {
    this.getPatients();
  }

  savePatients()
  {
    this.x.post("https://patients-722b4.firebaseio.com/Patient.json",this.Patients).subscribe(

    (res)=>{
      console.log("record saved successfully");
   
    },
    (error)=>{},
    ()=>{
      this.Patients={};
      this.getPatients();
    }
    );
  }

  getPatients()
  {
    this.x.get("https://patients-722b4.firebaseio.com/Patient.json").subscribe(

    (res)=>{

      var records=res.json();
      console.log(records);
      var keys=Object.keys(records);
      console.log(keys);

      this.PatientArray=keys.map(function(key){
        return{keyval:key,data:records[key]}
      });

    },
    (error)=>{},
    ()=>{}
    );  }

    delPatient(key)
    {
      this.x.delete("https://patients-722b4.firebaseio.com/Patient/"+key+".json").subscribe(

      (res)=>{
        console.log(res);
        console.log("record deleted");
        this.getPatients();
      },
      (error)=>{},
      ()=>{}
      );
    }

}
