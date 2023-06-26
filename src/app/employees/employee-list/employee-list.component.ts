import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee.model';
import { EmployeeService } from "../../services/employee.service";
import { ToastrService } from "../../shared/toastr.service";
declare var window: any;
@Component({
   templateUrl: './employee-list.component.html',
   styles: [`
      td button {
         margin-right: 10px;
      }
   `]
})
export class EmployeeListComponent implements OnInit {

   employees: IEmployee[];
   detailedEmployee: IEmployee[];
   skills:any;
   formModal: any;
   constructor(
      private employeeService: EmployeeService,
      private toastr: ToastrService,
   ) { }

   ngOnInit() {
      // get all employees
      this.formModal = new window.bootstrap.Modal(
         document.getElementById('myModal')
       );

      this.employeeService
         .getEmployees()
         .subscribe(employees => {
            debugger;
            this.employees = employees;
         })
   }
   
   delete(id: number) {
      this.employeeService
         .deleteEmployee(id)
         .subscribe(() => {
            this.employees = this.employees.filter(emp => emp.id !== id)
            this.toastr.success("Deleted successfully");
            
         })
   }

   getDetails(id: number) {
      this.formModal.show();
      this.employeeService
         .getEmployee(id)
         .subscribe(()=>{
            debugger;
            this.detailedEmployee = this.employees.filter(emp => emp.id == id)
            
         })
   }

   

   public keepOriginalOrder = (a, b) => a.key;

   
}