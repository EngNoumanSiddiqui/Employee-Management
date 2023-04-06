import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(
    public router: Router,
    private requestService: RequestService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.spinner.show();
    this.requestService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      },
      error: (error) => {
        console.log('error: ', error);
      }
    });

  }

  employeeList(){
    this.router.navigate(['']);
  }

  AddEmployee(){
    this.router.navigate(['/add-employee']);
  }


}
