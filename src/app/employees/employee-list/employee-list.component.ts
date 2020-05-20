import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/shared/message.service';
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
  constructor(private service: EmployeeService, private messageService: MessageService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        this.service.getEmployeesList().subscribe(results => {
          this.list = results.data;
        });
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
    this.service.getEmployeesList().subscribe(results => {
      this.list = results.data;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}