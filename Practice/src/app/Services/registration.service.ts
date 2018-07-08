import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
@Injectable ({providedIn:'root'})
export class RegistrationService{
    constructor(private http:Http)
    {

    }

    registerStudent(data)
    {
        return this.http.post("https://employee-f2ca7.firebaseio.com/Registration.json",data);
    }

    getStudent()
    {
       return  this.http.get("https://employee-f2ca7.firebaseio.com/Registration.json");
    }
}