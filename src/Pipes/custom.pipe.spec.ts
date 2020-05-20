
import { TestBed, async } from '@angular/core/testing';
import { EmployeeNameFilter } from './custom.pipe';

describe('EmployeeNameFilter', () => {
  it('create an instance', () => {
    const pipe = new EmployeeNameFilter();
    expect(pipe).toBeTruthy();
  });

  it('should filter employee name', () => {
    const items = [{empname: 'Tiger', empage: 'Lion'}];
    const filter = [{empname: 'Tiger'}];
    const pipe = new EmployeeNameFilter();

    const result = pipe.transform(items, items.filter);
    if (!items || !filter) {
        return items;
    }
    expect(result).toBe(filter);

});
});
