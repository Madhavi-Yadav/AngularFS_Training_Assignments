import { ConditionalExpr } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';

import { DeptService } from './dept.service';

describe('DeptService', () => {
  let service: DeptService;

  let deptObj ={deptno : 50, dname : "Hr",  loc :  "Hyd"} ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // a. Test default items
  it('Test default items', () => {
    expect(service.deptsArray.length).toBe(4);
   });
 
   // b. Test addDept
   it('Test addDept', () => {
     service.addDept(deptObj)
     expect(service.deptsArray.length).toBe(5);
    });
  
 
   // c. Test Remove Dept -- for valid number
   it('Test Remove Dept -- for valid number', () => {
     service.removeDept(10);
     expect(service.deptsArray.length).toBe(3);
    });
 
   // d. Test Remove Dept -- for invalid number
   it('Test Remove Dept -- for invalid number', () => {
    let result:any = service.removeDept(15);  
     expect(service.deptsArray.length).toEqual(4);
    });
});
