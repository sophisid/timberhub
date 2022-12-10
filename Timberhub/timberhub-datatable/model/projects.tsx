import { Company } from "./company";
import { Person } from "./person";

export interface Projects {
    id: number;
    title: string;
    hasCompany: Company;
    creator: Person;
    img:string;
    progress:number;
    deadline: Date;
  }
  