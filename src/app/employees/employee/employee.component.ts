import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/common/services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/common/services/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  model = new Employee();
  createEmployeeSubscription;
  appendEmpList: {};
  constructor(private service: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  // To create new employee.
  createEmployee() {
    if (this.model) {
      this.createEmployeeSubscription = this.service.addEmployee(this.model).subscribe(results => {
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
          this.model = new Employee(); // Clears the value after employee created successfully.
        }
      }, (error) => {
        this.toastr.error('', error);
      });
    }
  }

  ngOnDestroy() {
    // we have to do unsubscribe to avoid memory leaks
    this.createEmployeeSubscription.unsubscribe();
  }
}
