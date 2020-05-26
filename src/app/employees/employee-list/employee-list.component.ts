import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/common/services/employee.service';
import { Employee } from 'src/app/common/services/employee.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  list: Employee[];
  messages: any[] = [];
  subscription: Subscription;
  constructor(private service: EmployeeService) {
    this.subscription = this.service.getMessage().subscribe(message => {
        this.list.push(message.employee);
      });
  }

  ngOnInit() {
    // To load all the employee list.
    this.service.getEmployeesList().subscribe(results => {
      this.list = results.data;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}