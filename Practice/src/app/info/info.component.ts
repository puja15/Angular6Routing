import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private accRoute:ActivatedRoute) { }

  ngOnInit() {
    this.accRoute.params.subscribe(

      para=>{
        console.log("the paarmeter is",para['id']);
      }
    );

  }

}
