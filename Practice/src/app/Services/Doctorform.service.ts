import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
@Injectable({providedIn:'root'})
export class DoctorformService
{
    constructor(private http:Http)
    {

    }

    createData(data)
    {
       return  this.http.post("https://employee-f2ca7.firebaseio.com/doctorform.json",data);
    }

    getData()
    {
        return this.http.get("https://employee-f2ca7.firebaseio.com/doctorform.json");
    }

    deleteData(id)
    {
        return this.http.delete("https://employee-f2ca7.firebaseio.com/doctorform/"+id+".json");
    }

    updateData(id,data)
    {
        return this.http.put("https://employee-f2ca7.firebaseio.com/doctorform/"+id+".json",data);
    }

}