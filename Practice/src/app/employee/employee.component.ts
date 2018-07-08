import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private emp: EmployeeService) { }
  private employee: any = {};
  private emparray :any=[];
  private editid :String;
  private btnstatus :boolean=true;
  ngOnInit() {
    this.getemployee();
  }


  save()
  {
    this.emp.create(this.employee).subscribe(
      (res)=>{
        console.log("Saved Successfully");
      },
      (err)=>{},
      ()=>{
        this.getemployee();
      }
    );
  }
  getemployee() {
    this.emp.get().subscribe(
      (res)=>{
        let records=res.json();
        let keys=Object.keys(records);
        this.emparray=keys.map(function(x){

          return {id:x,data:records[x]}
        })
      },
      (err)=>{},
      ()=>{}
    );
  }

  delete(id)
  {
    this.emp.delete(id).subscribe(
      (res)=>{
        console.log("deleted successfully")
      },
      (err)=>{},
      ()=>{this.getemployee();}
    );
  }

  edit(employee)
  {
    this.employee=employee.data;
    this.editid=employee.id;
    this.btnstatus=false;

  }

  update()
  {
    this.emp.update(this.editid,this.employee).subscribe(
      (res)=>{
        console.log("updated successfully");
      },
      (err)=>{},
      ()=>{
        this.getemployee();
      }
    );
  }

}
