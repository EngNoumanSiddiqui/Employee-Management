import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee: Employee = {
    id: '',
    name: '',
    salary: '',
    department: '',
    createdAt: ''
  };

  constructor(
    public router: Router,
    private requestService: RequestService,
  ) { }

  ngOnInit(): void {
  }

  addEmployee(): void {
    this.requestService.addEmployee(this.employee).subscribe((employee)=>{
      console.log('employee: ', employee);
    })
    //this.router.navigate(['']);
  }

  employeeList(){
    this.router.navigate(['']);
  }

  AddEmployee(){
    this.router.navigate(['/add-employee']);
  }

}
