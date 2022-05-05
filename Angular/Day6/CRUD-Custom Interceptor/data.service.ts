import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}