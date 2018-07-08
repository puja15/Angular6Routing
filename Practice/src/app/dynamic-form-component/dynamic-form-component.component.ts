import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  styleUrls: ['./dynamic-form-component.component.css']
})
export class DynamicFormComponentComponent implements OnInit {

  private docForm :FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.docForm=this.fb.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      speciality:['',[Validators.required]],
      patientsarray:this.fb.array([this.createPatientForm()])
    })
  }

  createPatientForm()
  {
    return this.fb.group({
      patient_name:[''],
      patient_age:['',]
    })
  }

  addPatient(){
    var patients=<FormArray>this.docForm.get('patientsarray');
    patients.push(this.createPatientForm())
  }

  delPatients(index)
  {
      var patients=this.docForm.get('patientsarray') as FormArray;
      patients.removeAt(index);

  }

  save()
  {
    console.log("Data is",this.docForm.value);
  }

}
