import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MessageService } from 'src/app/shared/message.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

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
  constructor(private service: EmployeeService, private messageService: MessageService,
              private toastr: ToastrService) {}

  ngOnInit() {
  }

  createEmployee() {
    const createEmpObj = {
      name: this.createEmp.name,
      age: this.createEmp.age,
      salary: this.createEmp.salary
    };
    if (this.createEmp.name && this.createEmp.age && this.createEmp.salary) {
      this.createEmployeeSubscription = this.service.addEmployee(createEmpObj).subscribe(results => {
        this.toastr.success('', 'Employee created successfully');
        this.messageService.sendMessage('Employee created!');
      });
    } else {
      this.toastr.warning('', 'Please enter the mandatory fields');
    }
  }

  ngOnDestroy() {
    // we have to do unsubscribe to avoid memory leaks
    this.createEmployeeSubscription.unsubscribe();
  }
}
