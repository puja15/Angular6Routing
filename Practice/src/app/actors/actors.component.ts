import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor(private x:Http) { }

  private actor:any={};
  private actorarray:any=[];
  private btn_status:boolean=true;
  private actorkey:string;
  ngOnInit() {
    this.getActor();
  }

  SaveActor()
  {

    this.x.post("https://actors-4adbf.firebaseio.com/Actors.json",this.actor).subscribe(

    (res)=>{
      console.log("Saved Successfully");
      this.actor={};
    },
    (error)=>{
      console.log("The error is",error);
    },
    ()=>{
      this.getActor();
    }
    );
  }

  getActor()
  {
    this.x.get("https://actors-4adbf.firebaseio.com/Actors.json").subscribe(
    (res)=>{
      var records=res.json();
      var keys=Object.keys(records);
      this.actorarray=keys.map(function(x){

        return {id:x,data:records[x]}
      });

    },
    (error)=>{},
    ()=>{}

    );
  }
  

  deleteActor(key)
  {
    this.x.delete("https://actors-4adbf.firebaseio.com/Actors/"+key+".json").subscribe(
      (res)=>{
        console.log(key);
        console.log("deleted successfully");
        this.getActor();
      },
      (error)=>{},
      ()=>{
        
      }
    );
  }

  editActor(actor)
  {
    this.actor=actor.data;
    this.btn_status=false;
    this.actorkey=actor.id;
  }

  updateActor()
  {
    this.x.put("https://actors-4adbf.firebaseio.com/Actors/"+this.actorkey+".json",this.actor).subscribe(

    (res)=>{
      console.log("updated successfully");
      this.getActor();
      this.actor={};
      this.btn_status=true;
    },
    (error)=>{},
    ()=>{}
    );
  }

}
