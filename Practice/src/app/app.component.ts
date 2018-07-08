import { Component } from '@angular/core';
import {  Http,Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private a:number=10;
  private b:number=20;
  private radius:number=10;
  private n1:number=80;
  private n2:number=90;
  private n3:number=100;
  private physics:number=90;
  private chemistry:number=92;
  private maths:number=95;
  private hindi:number=99;
  private english:number=99;

  private path:String="https://codecondo.com/wp-content/uploads/2015/05/15-Directives-to-Extend-Your-Angular.js-Apps.jpg";

  show()
  {
    alert("hello");
  }

  private a1:string="10";
  private b1:string="20";

  add()
  {

    var t1=parseInt(this.a1);
    var t2=parseInt(this.b1);

    alert("the sum is"+(t1+t2));
  }

  private p:string="90";
  private c:string="99";
  private m:string="99";
  private h:string="99";
  private e:string="99";

  average()
  {
    var t1=parseFloat(this.p);
    var t2=parseFloat(this.c);
    var t3=parseFloat(this.m);
    var t4=parseFloat(this.h);
    var t5=parseFloat(this.e);

    alert("the average of numbers is"+((t1+t2+t3+t4+t5)/5));

  }

  private base:string="10";
  private height:string="20";

  Area()
  {
    var b1=parseFloat(this.base);
    var h1=parseFloat(this.height);
    alert("Area of Triangle is"+(0.5*b1*h1));
  }

  private equiA:string="10";
  private equiB:string="10";
  private equiC:string="10";

  randomArea()
  {
    var a=parseFloat(this.equiA);
    var b=parseFloat(this.equiB);
    var c=parseFloat(this.equiC);

    var s=(a+b+c)/2;
    alert("Area using Heron's formula is "+Math.sqrt(s*(s-a)*(s-b)*(s-c)));
  }

private emp : any={

  firstname:"Puja",
  Lastname:"Agrawal",
  age:24
};

private doctor: any={

  fname:"Puja",
  lname:"Agrawal",
  age:"24",
  specialist:"Dentist"
};
  

private City:any[]=[

{c_name:"Whitefiled",c_population:"1000",c_food:"idli"},
{c_name:"Marathahali",c_population:"2000",c_food:"dosa"},
{c_name:"BTM",c_population:"100",c_food:"PAv-bhaji"}

];

private dname:string;
private dage:number;

private Doctor: any[]=[

  {dname:"Puja",dage:24},
  {dname:"ameena",dage:23}
];
save()
{
  console.log(this.dname,this.dage);
  var ob={dname:this.dname,dage:this.dage}

  this.Doctor.push(ob);
}
deleteProducts(index)
{
  this.Doctor.splice(index,1);
}

private users:any[];

//firebase employee code
// constructor(private x:Http)
// {
//   this.x.get("https://reqres.in/api/users?page=2").subscribe(

// (res:Response)=>{
//   console.log('response is'+JSON.stringify(res.json()))
//   var record=res.json().data;
//   this.users=record;

// },
// (error)=>{
// console.log('error is',error)
// }

//   );
// }

// constructor(private http:Http)
// {
// this.getEmployees();
// }


// //private emp_name:string;
// //private emp_dept:string;

// private employee:any={};
// private employees:any[]=[];
// private status:string;
// saveEmployee()
// {
//   this.status="saving";
//   console.log(this.employee);
//   this.http.post("https://myproject-34fcb.firebaseio.com/Employees.json",this.employee).subscribe(
// (res : Response)=>{
//   console.log("Record Saved..");
// },
// (error)=>{

//   console.log("Error is"+error);
// },
// ()=>{
//   this.employee={}; 
//   this.status="recoed saved...!!"
//   this.getEmployees();
// }

//   );
// }

// getEmployees()
// {
//     this.http.get("https://myproject-34fcb.firebaseio.com/Employees.json").subscribe(
//   (res: Response)=>{
//     var resjson=res.json();
//     var keys=Object.keys(resjson);
//     this.employees=keys.map(function(x){
//       return{id:x,data:resjson[x]}
//     });

//     console.log(this.employees);
//   },
//   (error)=>{}

//     );
// }
constructor(private http:Http)
{
this.getDoctor();
}
private Ddoctor :any={};
private status:string;
private Doctors :any[]=[];

getDoctor()
{
  this.http.get("https://myproject-34fcb.firebaseio.com/Doctor.json").subscribe(

  (res:Response)=>{
    console.log(res.json());
  var resjson=res.json();
  var keys=Object.keys(resjson);
  this.Doctors=keys.map(function(x){

    return {id:x,data:resjson[x]}
  });

  console.log(this.Doctors);
  },
  (error)=>{},
  ()=>{}
  );
}

SaveDoctor()
{
  this.status="saving";
  console.log(this.Ddoctor);
  this.http.post("https://myproject-34fcb.firebaseio.com/Doctor.json",this.Ddoctor).subscribe(

    (res: Response)=>{
      console.log("Record Saved");
    },
    (error)=> {
      console.log("error is",error);
    },

    ()=>{

      this.Ddoctor={};
      this.getDoctor();
      this.status="Saved Successfully";
    }

  );
}
}
