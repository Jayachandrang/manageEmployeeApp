import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from 'src/app/shared/employee.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';

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
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    empService = debugElement.injector.get(EmployeeService);
    empSpy =
      spyOn(empService, 'addEmployee').and.returnValue(of({ json: () => [] }));
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
    const employeeSpy =
      spyOn(empService, 'getEmployeesList').and.returnValue(of({ json: () => [] }));
    expect(employeeSpy).toBeDefined();
  });
});
