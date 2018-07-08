import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private Products:any={};
  private prodarray:any=[];
  private editid:string;
  private btnstatus:boolean=true;
  constructor(private prod: ProductService) { }

  ngOnInit() {
    this.getProd();
  }

  save()
  {
    this.prod.createProducts(this.Products).subscribe(
      (res)=>{
        console.log("saved successfully");
        this.Products="";
      },
      (err)=>{},
      ()=>{this.getProd();}
    );
  }

  getProd()
  {
    this.prod.getProducts().subscribe(
      (res)=>{
        let records=res.json();
        let keys=Object.keys(records);
        this.prodarray=keys.map(function(x){

          return {id:x,data:records[x]}
        })
      },
      (err)=>{},
      ()=>{}
    );
  }

  edit(product)
  {
    this.Products=product.data;
    this.editid=product.id;
    this.btnstatus=false;
  }

  update()
  {
    this.prod.updateProducts(this.editid,this.Products).subscribe(
      (res)=>{
        console.log("upadted successfully");
        this.Products="";
      },
      (err)=>{},
      ()=>{
        this.getProd();
      }
    );
  }

  delete(id)
  {
    this.prod.deleteProducts(id).subscribe(
      (res)=>{
        console.log("deleted successfully");
      },
      (err)=>{},
      ()=>{
        this.getProd();
      }
    );
  }

}
