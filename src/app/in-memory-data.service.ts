import { InMemoryDbService } from "angular-in-memory-web-api";
import { IEmployee } from "./employees/employee.model";

export class InMemoryDataService implements InMemoryDbService {
   createDb() {
      const employees = [
         {
            id: 1,
            name: 'CB',
            email: 'rasika@yahoo.com',
            gender: 'F',
            contactNumber: 9874563211,
            employeeSkills: [{ 
               skillname: 'Java' ,
               skillexperience:"4"
            },
            { 
               skillname: 'Angular' ,
               skillexperience:"4"
            }]
         },
         {
            id: 2,
            name: 'Bhargav',
            email: 'bhargav@yahoo.com',
            gender: 'M',
            contactNumber: 9874563211,
            employeeSkills: [{ 
               skillname: 'None' ,
               skillexperience:"4"
            }]
         },
      ];

      return { employees };
   }

   genId(employees: IEmployee[]): number {
      return employees.length > 0 ? Math.max(...employees.map(hero => hero.id)) + 1 : 1
    }
}