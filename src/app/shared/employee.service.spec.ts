import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
