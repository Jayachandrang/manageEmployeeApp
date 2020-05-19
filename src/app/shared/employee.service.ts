import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeBaseAPI: string = environment.employeeBaseAPI; // we can declare the employee base URL in environment
  constructor(private http: HttpClient) { }

  addEmployee(createEmpPayload) {
    return this.http.post(this.employeeBaseAPI + 'create', createEmpPayload);

  }

  getEmployeesList(): Observable<any> {
    return this.http.get(this.employeeBaseAPI + 'employees');
  }

  //  deleteEmployee(id : number){
  //   return this.http.delete(this.rootURL+'/Employee/'+id);
  //  }
}