import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {StudentInfoService} from '../student-info.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createStudentForm: FormGroup;


  constructor( private studentinfoservice:StudentInfoService,
    private router:Router,
    private snackBar:MatSnackBar,
    private fb:FormBuilder) {
      this.createStudentForm = this.fb.group({
        name: ['', Validators.required],
        mobile: '',
        email: ['', Validators.required],
        city: '',
       
      });
     }



  createStudentData(name,mobile,email,city){
    this.studentinfoservice.createStudentData(name,mobile,email,city,).subscribe(() => {
      this.router.navigate(['/list']);

    });
    this.snackBar.open('Student Data Created Successfully...!', 'OK', {
      duration: 3000
    });
  }

  ngOnInit() {
  }

}
