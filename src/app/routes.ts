import { Routes } from "@angular/router";

import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";

export const appRoutes: Routes = [
   { path: 'employees/add', component: AddEmployeeComponent },
   { path: 'employees/add/:id', component: AddEmployeeComponent },
   { path: 'employees', component: EmployeeListComponent },
   { path: '', redirectTo: 'employees', pathMatch: 'full' },
   { path: '**', redirectTo: 'employees', pathMatch: 'full' }
]