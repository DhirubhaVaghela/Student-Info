import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

baseUrl='http://localhost:3000/students';
  

  constructor(private http:HttpClient) { }

getStudentInfos(){
  return this.http.get(`${this.baseUrl}`);
}

getstudentinfoById(id){
  return this.http.get(`${this.baseUrl}/${id}`);

}

createStudentData(name,mobile,email,city){
  const StudentInfoModel={
    name:name,
    mobile:mobile,
    email:email,
    city:city
  };
  return this.http.post(`${this.baseUrl}`, StudentInfoModel); 

}

updateStudentData(id, name, mobile, email, city) {
  const StudentInfoModel = {
    name: name,
    mobile: mobile,
    email: email,
    city: city
    
  };

  return this.http.put(`${`http://localhost:3000/students`}/${id}`, StudentInfoModel);
}

deletestudentinfo(id) {
  return this.http.delete(`${`http://localhost:3000/students`}/${id}`);
}

}
