import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list.component';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { EmployeeNameFilter } from 'src/Pipes/custom.pipe';
import { of } from 'rxjs';
describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let empService: EmployeeService;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, BrowserModule, FormsModule, ToastrModule.forRoot()],
      declarations: [EmployeeListComponent, EmployeeNameFilter],
      providers: [EmployeeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    empService = fixture.debugElement.injector.get(EmployeeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create list', () => {
    const list = [{
      ' id': '1', ' employee_name': 'Tiger Nixon', ' employee_salary': '320800', ' employee_age': '61'
    }];
    expect(component.list).toBeUndefined();
  });

  it('should call getEmployeesList and return list of employees', async(() => {
    // Arrange
    const response: Employee[] = [];
    const list = [{
      ' id': '1', ' employee_name': 'Tiger Nixon', ' employee_salary': '320800', ' employee_age': '61'
    }];
    jasmine.createSpy('getEmployeesList').and.returnValue(of(list));
    empService.getEmployeesList();
    fixture.detectChanges();
    expect(empService.getEmployeesList()).toBeDefined();
  }));

});
