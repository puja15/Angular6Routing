import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({providedIn:'root'})
export class ProductService{
    constructor(private http:Http)
    {
        
    }

    createProducts(data)
        {
            return this.http.post('https://employee-f2ca7.firebaseio.com/Products.json',data);
        }

        getProducts()
        {
            return this.http.get('https://employee-f2ca7.firebaseio.com/Products.json');
        }

        deleteProducts(id)
        {
            return this.http.delete('https://employee-f2ca7.firebaseio.com/Products/'+id+'.json');
        }

        updateProducts(id,data)
        {
            return this.http.put('https://employee-f2ca7.firebaseio.com/Products/'+id+'.json',data);
        }
}