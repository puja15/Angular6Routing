import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

// @Injectable({
//     providedIn: 'root'
//   })

export class EmployeeService {
    constructor(private http: Http) {

    }

    create(data) {
        return this.http.post('https://employee-f2ca7.firebaseio.com/Employee.json',data);
        
    }

    get() {

        return this.http.get('https://employee-f2ca7.firebaseio.com/Employee.json');
    }

    delete(id) {
        return this.http.delete('https://employee-f2ca7.firebaseio.com/Employee/'+id+'.json');
    }

    update(id,data) {

            return this.http.put('https://employee-f2ca7.firebaseio.com/Employee/'+id+'.json',data);
    }
}