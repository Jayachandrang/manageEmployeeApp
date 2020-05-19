import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
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
  refreshEmployee;
  constructor(private service: EmployeeService, private toastr: ToastrService) {}

  ngOnInit() {
  }

  createEmployee() {
    const createEmpObj = {
      name: this.createEmp.name,
      age: this.createEmp.age,
      salary: this.createEmp.salary
    };
    if (this.createEmp.name && this.createEmp.age && this.createEmp.salary) {
      this.service.addEmployee(createEmpObj).subscribe(results => {
        this.toastr.success('', 'Employee created successfully');
        this.refreshEmployee = results;
      });
    } else {
      this.toastr.warning('', 'Please enter the mandatory fields');
    }
  }
}
