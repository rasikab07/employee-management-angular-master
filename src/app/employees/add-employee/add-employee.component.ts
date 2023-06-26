import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';
import { IEmployee } from '../employee.model';
import { EmployeeService } from "../../services/employee.service";
import { FormGroup, FormArray, FormBuilder,Validators, FormControl } from '@angular/forms';

@Component({
   templateUrl: '../../shared/employee-form.component.html'
})
export class AddEmployeeComponent implements OnInit{
   registerForm: FormGroup;
   submitted = false;
   isaddmode: boolean;
   empid:number;
   employee: IEmployee = {
      id: null,
      name: "",
      email: "",
      gender: "",
      contactNumber: "",
      employeeSkills: []
        //{
         // skillname: "",
         // skillexperience:"",
      //}
   
   }
   

   constructor(
      private employeeService: EmployeeService,
      private router: Router,
      private route: ActivatedRoute,
      private toastr: ToastrService,
      private formBuilder: FormBuilder,
      
   ) { 
      this.createForm();
   }

   ngOnInit() {
      
      this.empid = +this.route.snapshot.paramMap.get('id');
      this.isaddmode = !this.empid;
      if (!this.isaddmode) {

      debugger;

      this.employeeService
      .getEmployee(this.empid)
      .subscribe(employee => {
         debugger
         this.employee = employee;
         this.showForm(this.employee);
         this.employee.id = this.employee.id;// toString().split('T')[0]
         
      });             

    }     
   }
   
   get f() { return this.registerForm.controls; }

   showForm(employee:IEmployee){
      this.showFormArray(employee);
  
      this.registerForm.patchValue({
  
        id:employee[0].id,
  
        name:employee[0].name,
  
        contactNumber:employee[0].contactNumber,
  
        email:employee[0].email,
  
        gender:employee[0].gender,
  
        employeeSkills:employee[0].employeeSkills    
  
      })    
  
    }
  
    showFormArray(employee:IEmployee){
  
       
      for(let i=0;i< employee[0].employeeSkills.length-1;i++)
  
      {
  
         this.add();
  
      }
  
  
  
  
    }


   createForm(){

      this.registerForm = new FormGroup({
  
        id: new FormControl("", [Validators.required]),
  
        name:new FormControl("", [Validators.required]),
  
        contactNumber:new FormControl("", [Validators.required]),
  
        email:new FormControl("",[Validators.required, Validators.email]),
  
        gender:new FormControl("female", [Validators.required]),
  
        employeeSkills: new FormArray([
  
          new FormGroup({
  
            skillName: new FormControl("", [Validators.required]),
  
            skillExperience: new FormControl("", [Validators.required])
  
          })
  
        ])
  
      });
  
    }
   onSubmit() {
      
      this.submitted = true;
        if (this.registerForm.value.id =="") {
            return;
        };
        if(this.empid==0){

         this.employeeService
         .addEmployee(this.registerForm.value)
         .subscribe(
            () => {
               this.router.navigate(['/employees'])
               this.toastr.success("Added new Employee");
            },
            (error) => this.toastr.error(error),
         )
        }
        else{

       
      this.employeeService
         .updateEmployee(this.empid,this.registerForm.value)
         .subscribe(
            () => {
               this.router.navigate(['/employees'])
               this.toastr.success("Updated new Employee");
            },
            (error) => this.toastr.error(error),
         )
      }
   }
   
   add(){
   
       const control = <FormArray>this.registerForm.controls['employeeSkills'];
   
       control.push(
   
         new FormGroup({
   
           skillName: new FormControl(''),
   
           skillExperience: new FormControl('')
   
         })
   
       )
   
     }
   
   
     removeSkill(index){
      
   if(index !=0){
      const control = <FormArray>this.registerForm.controls['employeeSkills'];
      control.removeAt(index);
   
   }
        
     }
   
}

