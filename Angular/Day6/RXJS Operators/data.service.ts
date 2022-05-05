import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  baseUrl:string  = "http://localhost:3000/emp/";

  constructor(private httpObj:HttpClient) { }

  // Read All
  public getAllemp(): Observable<any>
  {
        return this.httpObj.get(this.baseUrl);
  }

  // Read Single
  public getEmployeeById(empno:number):any
  {
    return this.httpObj.get(this.baseUrl + empno);
  }

  // Create
  public addEmployee(empObj:any):any
  {
    return this.httpObj.post(this.baseUrl, empObj);
  }

  // Update
  public updateEmployee(empObj:any):any
  {
    return this.httpObj.put(this.baseUrl + empObj.empno, empObj);
    // return this.httpObj.put(this.baseUrl, empObj);
  }


  // Delete
  public deleteEmployee(empno:number):any
  {
    return this.httpObj.delete(this.baseUrl + empno);
  }


  //  Customizing the response using RxJS operators
  getSemployeeByJob(job:string):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.job == job);
    })
    );
  }

  getEmployeeNames():Observable<string[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => { return item.name });
    })
    );
  }


  getEmployeeNameAndJob():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => {
          return { 	name: item.ename, job : item.job} });
    })
    );
  }

  getEmployeeDetailsByJob(job:string):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.job==job);
    })
    );
  }


  getManagersByDept(dept:number):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.deptno == dept && item.job=="MANAGER");
    })
    );
  }

  getEmployeeByDeptNot10():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.deptno != 10);
    })
    );
  }

  getSortedEmployee():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.sort((a, b) => (a.sal > b.sal) ? 1 : -1);
    })
    );
  }


}
