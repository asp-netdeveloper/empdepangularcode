import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:59519/api";
  readonly PhotoUrl="http://localhost:59519/Images";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department/GetDepartments');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/department/AddDepartment',val);
  }

  updateDepartment(val:any){
    return this.http.post(this.APIUrl+'/department/UpdateDepartment?id='+val.departmentId, val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/department/DeleteDepartment?departmentId='+val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employee/GetEmployees');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/employee/AddEmployee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/employee/UpdateEmployee?employeeId='+val.employeeId, val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/employee/DeleteEmployee'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/UploadFile',val);
  }

  getAllDepartmentName():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}
