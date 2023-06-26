import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { EmployeeAppComponent } from "./employee-app.component";
import { appRoutes } from "./routes";
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";
import { LoaderComponent } from "./shared/Loader/loader.component";

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
   declarations: [
      EmployeeAppComponent,
      EmployeeListComponent,
      AddEmployeeComponent,
      LoaderComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      CommonModule,
      //InMemoryWebApiModule.forRoot(InMemoryDataService),
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [EmployeeAppComponent],
})
export class AppModule { }
