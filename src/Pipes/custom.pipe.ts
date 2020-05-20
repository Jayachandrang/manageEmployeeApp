import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'EmployeeNameFilter',
    pure: false // To stop input arguments change everytime, we made it false.
})
@Injectable()
export class EmployeeNameFilter implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.employee_name.indexOf(filter) !== -1);
    }
}