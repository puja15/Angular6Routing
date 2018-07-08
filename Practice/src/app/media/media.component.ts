import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  private media:any={};
  private mediaarray:any=[];
  private btn_status:boolean=true;
  private mediakey:string;
  constructor(private x:Http) { }

  ngOnInit() {
    this.getmedia();
  }
save()
{
  this.x.post("https://media-60fe8.firebaseio.com/media.json",this.media).subscribe(

  (res)=>{
    console.log("saved successfully");
    this.media={};
    this.getmedia();
  },
  (error)=>{},
  ()=>{}
  );
}

getmedia()
{
  this.x.get("https://media-60fe8.firebaseio.com/media.json").subscribe(
    (res)=>{
      var records=res.json();
      var keys=Object.keys(records);
      this.mediaarray=keys.map(function(x){
         return {id:x,data:records[x]}
      })
    },
    (err)=>{},
    ()=>{}
  );
}

deleteMedia(key)
{
  this.x.delete("https://media-60fe8.firebaseio.com/media/"+key+".json").subscribe(
    (res)=>{
      console.log(key);
      console.log("deleted successfully");
      this.getmedia();
    },
    (error)=>{},
    ()=>{}
  );
}

editMedia(media)
{
  this.media=media.data;
  this.btn_status=false;
  this.mediakey=media.id;

}

update()
{
  this.x.put("https://media-60fe8.firebaseio.com/media/"+this.mediakey+".json",this.media).subscribe(

  (res)=>{
    console.log("updated successfully");
    this.btn_status=true;
    this.media={};

  },
  (error)=>{},
  ()=>{}
  );
}
}
