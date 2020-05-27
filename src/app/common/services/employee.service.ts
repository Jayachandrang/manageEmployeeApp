import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private subject = new Subject<string>();
  employeeBaseAPI: string = environment.employeeBaseAPI; // we can declare the employee base URL in environment
  constructor(private http: HttpClient) { }

  addEmployee(createEmpPayload) {
    return this.http.post(this.employeeBaseAPI + 'create', createEmpPayload);
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