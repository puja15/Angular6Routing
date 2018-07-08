import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private emps:any=[];
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("https://employee-f2ca7.firebaseio.com/Employee.json").subscribe(

    (res)=>{
      var records=res.json();
      let keys=Object.keys(records);
      this.emps=keys.map(function(key)
      {
        return {id:key,data:records[key]}
      })
    },
    (err)=>{}
    );
  }

}
