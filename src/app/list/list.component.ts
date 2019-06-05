import { Component, OnInit, ViewChild } from '@angular/core';
import {StudentInfoService} from '../student-info.service';
import { StudentInfoModel } from "../StudentInfoModel";
import {Router} from '@angular/router';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { MatSnackBar } from '@angular/material';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  studentInformations: StudentInfoModel[];
  displayedColumns = ['name', 'mobile', 'email', 'city','actions'];


  

  constructor( private StudentInfoService:StudentInfoService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.fetchStudentInformations();

    
  }
 

  fetchStudentInformations(){
    this.StudentInfoService.getStudentInfos().subscribe((data: StudentInfoModel[]) => {
      this.studentInformations = data;
      console.log('Data requested...', this.studentInformations);
    });
  }

  editstudentInfo(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deletestudentinfo(id) {
    this.StudentInfoService.deletestudentinfo(id).subscribe(()=> {
      this.fetchStudentInformations();
    });
    this.snackbar.open('Student Data Deleted Successfully...!', 'OK',{
      duration: 3000
    });
    
       
  }
  


}
