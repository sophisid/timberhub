import { Company } from "./company";
import { Person } from "./person";

export interface Projects {
    id: number;
    name: string;
    hasCompany: Company;
    creator: Person;
    img:string;
    progress:number;
    deadline: Date;
  }
  