export interface IEmployee {
   id: number;
   name: string;
   email: string;
   gender?: string;
   contactNumber: string;
   employeeSkills:employeeSkills[];
}
export interface employeeSkills{  
   
      skillName: string,
      skillExperience:string
   
}