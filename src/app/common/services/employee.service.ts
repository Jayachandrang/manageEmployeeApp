import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private subject = new Subject();
  employeeBaseAPI: string = environment.employeeBaseAPI; // we can declare the employee base URL in environment
  constructor(private http: HttpClient) { }

  addEmployee(payloadObj) {
    return this.http.post(this.employeeBaseAPI + 'create', payloadObj);
  }

  getEmployeesList() {
    return this.http.get(this.employeeBaseAPI + 'employees');
  }

  sendMessage(message) {
    this.subject.next(message);
  }

  getMessage() {
    return this.subject.asObservable();
  }
}