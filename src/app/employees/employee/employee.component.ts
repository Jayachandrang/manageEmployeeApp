import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/common/services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  createEmp = {
    name: '',
    salary: '',
    age: '',
  };
  createEmployeeSubscription: any;
  appendEmpList: {};
  constructor(private service: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  // To create new employee.
  createEmployee() {
    const createEmpObj = {
      name: this.createEmp.name,
      age: this.createEmp.age,
      salary: this.createEmp.salary
    };
    if (this.createEmp.name && this.createEmp.age && this.createEmp.salary) {
      this.service.addEmployee(createEmpObj).subscribe(results => {
        if (results && results['data']) {
          this.appendEmpList = {};
          for (const changeObj in results['data']) {
            if (changeObj === 'id') {
              this.appendEmpList['id'] = results['data'].id;
            } else {
              this.appendEmpList[`employee_${changeObj}`] = results['data'][changeObj];
            }
          }
          this.service.sendMessage({ employee: this.appendEmpList });
          this.toastr.success('', 'Employee created successfully');
        }
      }, (error) => {
        this.toastr.error('', error);
      });
    } else {
      this.toastr.warning('Please enter the mandatory fields');
    }
  }

  ngOnDestroy() {
    // we have to do unsubscribe to avoid memory leaks
    this.createEmployeeSubscription.unsubscribe();
  }
}
