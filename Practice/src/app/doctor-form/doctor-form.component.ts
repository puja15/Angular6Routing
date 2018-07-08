import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { DoctorformService } from '../Services/Doctorform.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {
@ViewChild('f') fnm:FormGroup
  constructor(private doc:DoctorformService) { }
private doctorarray:any=[];
  ngOnInit() {
    this.getDoctor();
  }

  // registerDoctor(form :NgForm)
  // {
  //   console.log(form.value);
  // }
  
  registerDoctor()
  {
    console.log(this.fnm.value)
    this.doc.createData(this.fnm.value).subscribe(
      (res)=>{
        console.log("saved successfully");
      },
      (error)=>{},
      ()=>{}
    );
  }

  getDoctor()
  {
    this.doc.getData().subscribe(
      (res)=>{
        let records=res.json();
        let keys=Object.keys(records);
        this.doctorarray=keys.map(key=>{
          return {id:key,data:records[key]}
        })

        console.log(records);
      },
      (err)=>{},
      ()=>{}
    );
  }
}
