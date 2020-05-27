import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from 'src/app/common/services/employee.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { Employee } from 'src/app/common/model/employee.model';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let empSpy;
  let empService: EmployeeService;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<EmployeeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ToastrModule.forRoot()],
      declarations: [EmployeeComponent],
      providers: [EmployeeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    debugElement = fixture.debugElement;
    empService = debugElement.injector.get(EmployeeService);
    empSpy =
      spyOn(empService, 'addEmployee').and.returnValue(of({"data":{"name": "AJad", "salary": 22, "age": 11, "id": 44}}));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create employee', () => {
    const fixtures = TestBed.createComponent(EmployeeComponent);
    fixtures.detectChanges();
    component.createEmployee();
    empService = debugElement.injector.get(EmployeeService);
    fixtures.componentInstance.createEmployee();
  });
});
