import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { RegistrationService } from '../Services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('f') fnm:FormGroup
  constructor(private reg:RegistrationService) { }

  ngOnInit() {
  }

  register()
  {
    console.log(this.fnm.value);
    this.reg.registerStudent(this.fnm.value).subscribe(
      (res)=>{
        console.log("Data Saved");
      },
      (err)=>{},
      ()=>{
        
      }
    );

  }

  clear()
  {
    this.fnm.reset();
  }

}
