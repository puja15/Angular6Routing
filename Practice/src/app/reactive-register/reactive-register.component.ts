import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {

  private docfrm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.docfrm=new FormGroup({
      fnm:new FormControl(null,[Validators.required,Validators.minLength[6]]),
      age:new FormControl(null,[Validators.required,Validators.minLength[2]])

    })
  }

}
