import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { StudentInfoService } from '../student-info.service';


import {StudentInfoModel } from '../student-info-model'; 
import { MatSnackBar } from '@angular/material';
import { __param } from 'tslib';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: String;
  StudentInfoModel: any={};
  editStudentForm: FormGroup;


  constructor( private studentinfoservice:StudentInfoService, 
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,){
    this.createStudentForm(); 
  }
   
  createStudentForm() {
    this.editStudentForm = this.fb.group ({
      name: ['', Validators.required],
      mobile: '',
      email: ['', Validators.required],
      city: '',
      
    });
  }
    editStudentData(name, mobile, email, city) {
      this.studentinfoservice.updateStudentData(this.id, name, mobile, email, city).subscribe(()=> {
        this.router.navigate(['/list']);
        this.snackBar.open('Student Record Updated Successfully...!', 'OK', {
          duration: 3000
        });
      });
    }
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params.id;
        this.studentinfoservice.getstudentinfoById(this.id).subscribe(res => {
          this.StudentInfoModel = res;
          this.editStudentForm.get('name').setValue(this.StudentInfoModel.name);
          this.editStudentForm.get('mobile').setValue(this.StudentInfoModel.mobile);
          this.editStudentForm.get('email').setValue(this.StudentInfoModel.email);
          this.editStudentForm.get('city').setValue(this.StudentInfoModel.city);
         
        });
      });
    }
} 
