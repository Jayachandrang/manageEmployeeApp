import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from 'src/app/shared/employee.service';
import { EmployeeNameFilter } from 'src/Pipes/custom.pipe';
describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let empService: EmployeeService;
  let debugElement : DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule, BrowserModule, FormsModule, ToastrModule.forRoot()],
      declarations: [ EmployeeListComponent, EmployeeNameFilter],
      providers: [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
   // empService = debugElement.injector.get(EmployeeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
