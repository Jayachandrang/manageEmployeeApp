import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MessageService } from 'src/app/shared/message.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule, FormsModule, ToastrModule.forRoot()],
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create employee', () => {
    component.createEmployee();
    const service: EmployeeService = TestBed.get(EmployeeService);
    const createEmpObj = {
      name: 'Jayachandran',
      age: 12,
      salary: 12000
    };
    expect(service.addEmployee(createEmpObj)).toBeDefined();
  });
});
